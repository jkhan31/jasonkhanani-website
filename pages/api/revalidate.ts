import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    // Revalidate the homepage
    await res.revalidate('/');
    
    // Revalidate the writing page
    await res.revalidate('/writing');
    
    // If a specific article slug is provided, revalidate that page
    if (req.body?.slug) {
      await res.revalidate(`/writing/${req.body.slug}`);
    }
    
    return res.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
