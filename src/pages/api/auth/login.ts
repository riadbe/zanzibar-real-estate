// pages/api/auth/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success?: boolean;
  message?: string;
  token?: string;
  user?: object;
  error?: string;
};

// Mock user database
const mockUsers = [
  {
    id: '1',
    email: 'admin@zanzibar.test',
    password: 'Admin@Zanzibar2026',
    name: 'Admin',
    role: 'ADMIN',
  },
  {
    id: '2',
    email: 'user@zanzibar.test',
    password: 'User@123456',
    name: 'User',
    role: 'USER',
  },
];

function generateToken(payload: any) {
  const jwt = require('jsonwebtoken');
  return jwt.sign(payload, process.env.JWT_SECRET || 'dev-secret-key', {
    expiresIn: '7d',
  });
}

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
      return res.status(400).json({ error: 'Email et mot de passe requis' });
    }

    // Find user (mock)
    const user = mockUsers.find((u) => u.email === email);

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }

    // Generate JWT token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return res.status(200).json({
      success: true,
      message: 'Connexion réussie',
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
}
