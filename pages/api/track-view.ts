import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../src/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { articleId, slug } = req.body;
    
    if (!articleId && !slug) {
      return res.status(400).json({ message: 'Article ID or slug is required' });
    }

    // Get article reference if slug is provided
    let articleRef = articleId;
    if (!articleRef && slug) {
      const article = await client.fetch(
        `*[_type == "article" && slug.current == $slug][0]._id`,
        { slug }
      );
      articleRef = article;
    }

    if (!articleRef) {
      return res.status(404).json({ message: 'Article not found' });
    }

    // Extract user agent and referrer from headers
    const userAgentHeader = req.headers['user-agent'];
    const referrerHeader = req.headers['referer'] || req.headers['referrer'];
    
    const userAgent = Array.isArray(userAgentHeader) ? userAgentHeader[0] : (userAgentHeader || 'Unknown');
    const referrer = Array.isArray(referrerHeader) ? referrerHeader[0] : (referrerHeader || 'Direct');

    // Sanitize headers - limit length and remove any potentially harmful characters
    const sanitizedUserAgent = userAgent.slice(0, 500).replace(/[<>]/g, '');
    const sanitizedReferrer = referrer.slice(0, 500).replace(/[<>]/g, '');

    // If no server token is configured, skip writes in dev to avoid 403s
    if (!process.env.SANITY_API_TOKEN) {
      // Log a short message for local debugging, but don't fail the request
      console.warn('SANITY_API_TOKEN not set — skipping view tracking (dev mode)');
      return res.status(200).json({ success: true, message: 'Tracking skipped (no server token)' });
    }

    // Create a new view record in Sanity
    const viewRecord = await client.create({
      _type: 'articleView',
      article: {
        _type: 'reference',
        _ref: articleRef,
      },
      timestamp: new Date().toISOString(),
      userAgent: sanitizedUserAgent,
      referrer: sanitizedReferrer,
    });

    return res.status(200).json({ 
      success: true, 
      message: 'View tracked successfully',
      id: viewRecord._id 
    });
  } catch (error) {
    console.error('Error tracking view:', error);
    return res.status(500).json({ 
      message: 'Error tracking view',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
