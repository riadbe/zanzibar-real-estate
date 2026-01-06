// pages/api/reservations/create.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success?: boolean;
  message?: string;
  reservationId?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userId, propertyId, date, message } = req.body;

    if (!userId || !propertyId || !date) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // TODO: Create reservation in database
    // Send confirmation email

    return res.status(201).json({
      success: true,
      message: 'Reservation created',
      reservationId: `RES_${Date.now()}`,
    });
  } catch (error) {
    console.error('Reservation creation error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
