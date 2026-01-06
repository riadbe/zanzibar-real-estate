// pages/api/auth/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success?: boolean;
  message?: string;
  token?: string;
  user?: any;
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
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Missing email or password' });
    }

    // TODO: Implement user authentication with database
    // 1. Find user by email
    // 2. Compare passwords
    // 3. Generate JWT token

    // Mock response
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token: 'mock_jwt_token',
      user: {
        id: '1',
        email,
        name: 'John Doe',
        role: 'USER',
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
