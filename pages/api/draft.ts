import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and Sanity Studio
  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Enable Draft Mode by setting the cookies
  res.setDraftMode({ enable: true });

  // Redirect to the path from the query parameter
  const redirectPath = req.query.slug 
    ? `/writing/${req.query.slug}` 
    : '/';
  
  res.redirect(redirectPath);
}
