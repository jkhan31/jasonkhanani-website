import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Exit the current Draft Mode
  res.setDraftMode({ enable: false });

  // Redirect to the path from the query parameter
  const redirectPath = req.query.slug 
    ? `/writing/${req.query.slug}` 
    : '/';
  
  res.redirect(redirectPath);
}
