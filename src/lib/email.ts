// lib/email.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async (options: EmailOptions): Promise<void> => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER || 'noreply@zanzibar-realestate.com',
      ...options,
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

// Email templates
export const emailTemplates = {
  welcome: (name: string) => `
    <h2>Bienvenue à Zanzibar Real Estate!</h2>
    <p>Bonjour ${name},</p>
    <p>Votre compte a été créé avec succès.</p>
    <p>Vous pouvez maintenant accéder à nos propriétés exclusives et payer en crypto-monnaie.</p>
  `,

  reservationConfirmed: (propertyTitle: string, date: string) => `
    <h2>Réservation Confirmée</h2>
    <p>Votre visite a été confirmée pour:</p>
    <p><strong>${propertyTitle}</strong></p>
    <p>Date et heure: ${date}</p>
    <p>Un agent vous contactera 24h avant la visite.</p>
  `,

  paymentConfirmed: (amount: string, currency: string) => `
    <h2>Paiement Confirmé</h2>
    <p>Votre paiement de ${amount} ${currency} a été reçu et confirmé.</p>
    <p>Votre propriété sera transférée prochainement.</p>
  `,

  paymentPending: (txHash: string) => `
    <h2>Paiement en Attente</h2>
    <p>Votre transaction a été envoyée:</p>
    <p>Hash: ${txHash}</p>
    <p>Nous confirmerons dès que la blockchain aura validé votre transaction.</p>
  `,
};
