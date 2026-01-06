// pages/api/auth/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success?: boolean;
  message?: string;
  token?: string;
  user?: object;
  error?: string;
};

// Mock user database
let mockUsers: any[] = [
  {
    id: '1',
    email: 'admin@zanzibar.test',
    password: 'Admin@Zanzibar2026',
    name: 'Admin',
    role: 'ADMIN',
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
    const { email, password, name } = req.body;

    // Validation
    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Champs requis manquants' });
    }

    // Check if user already exists
    if (mockUsers.some((u) => u.email === email)) {
      return res.status(400).json({ error: 'Email déjà utilisé' });
    }

    // Create new user
    const newUser = {
      id: String(mockUsers.length + 1),
      email,
      password,
      name,
      role: 'USER',
    };

    mockUsers.push(newUser);

    // Generate JWT token
    const token = generateToken({
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
    });

    return res.status(201).json({
      success: true,
      message: 'Inscription réussie',
      token,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
}
