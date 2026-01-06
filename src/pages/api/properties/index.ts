// pages/api/properties/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success?: boolean;
  properties?: object[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // TODO: Fetch properties from database based on filters
    // const { minPrice, maxPrice, location, type, exclusive } = req.query

    // Mock response
    const properties = [
      {
        id: '1',
        title: 'Villa Luxe - Stone Town',
        price: 850000,
        location: 'Stone Town',
        bedrooms: 4,
        bathrooms: 3,
        area: 250,
        exclusive: true,
      },
      {
        id: '2',
        title: 'Appartement Vue Mer',
        price: 450000,
        location: 'Nungwi Beach',
        bedrooms: 3,
        bathrooms: 2,
        area: 180,
        exclusive: false,
      },
    ];

    return res.status(200).json({
      success: true,
      properties,
    });
  } catch (error) {
    console.error('Properties error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
