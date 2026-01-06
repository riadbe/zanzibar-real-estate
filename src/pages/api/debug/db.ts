import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Ensure connection
    await prisma.$connect();
    const users = await prisma.user.count();
    res.status(200).json({ ok: true, connected: true, users });
  } catch (err) {
    res.status(500).json({ ok: false, connected: false, error: String(err) });
  } finally {
    try {
      await prisma.$disconnect();
    } catch (_) {}
  }
}
