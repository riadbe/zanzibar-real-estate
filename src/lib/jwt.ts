// lib/jwt.ts - Server only
export function generateToken(payload: any, secret?: string) {
  // Use require to avoid webpack bundling
  const jwt = require('jsonwebtoken');
  return jwt.sign(payload, secret || process.env.JWT_SECRET || 'dev-secret-key', {
    expiresIn: '7d',
  });
}

export function verifyToken(token: string, secret?: string) {
  try {
    const jwt = require('jsonwebtoken');
    return jwt.verify(token, secret || process.env.JWT_SECRET || 'dev-secret-key');
  } catch (error) {
    return null;
  }
}
