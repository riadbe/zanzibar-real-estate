// pages/api/payments/verify.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getTransactionStatus } from '@/lib/crypto';

type ResponseData = {
  success?: boolean;
  status?: string;
  message?: string;
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
    const { txHash } = req.body;

    if (!txHash) {
      return res.status(400).json({ error: 'Missing transaction hash' });
    }

    // Check transaction status on blockchain
    const status = await getTransactionStatus(txHash);

    // TODO: Update payment status in database

    return res.status(200).json({
      success: true,
      status,
      message: `Transaction status: ${status}`,
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
