'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaEthereum, FaBitcoin, FaCopy, FaCheckCircle } from 'react-icons/fa';

interface PaymentPageProps {
  params: {
    id: string;
  };
}

export default function PaymentPage({ params }: PaymentPageProps) {
  const [selectedCrypto, setSelectedCrypto] = useState<'BTC' | 'ETH' | 'USDC'>('ETH');
  const [paymentType, setPaymentType] = useState<'DEPOSIT' | 'FULL'>('DEPOSIT');
  const [copied, setCopied] = useState(false);

  // Données fictives
  const property = {
    title: 'Villa Luxe - Stone Town',
    price: 850000,
  };

  const depositAmount = property.price * 0.1; // 10% dépôt
  const cryptoAddresses = {
    BTC: '1A1z7agoat2BYLC4QN7eS1qHSWYS5rwVXn',
    ETH: '0x742d35Cc6634C0532925a3b844Bc9e7595f5bEb5',
    USDC: '0x742d35Cc6634C0532925a3b844Bc9e7595f5bEb5',
  };

  const cryptoPrices = {
    BTC: { rate: 42500, amount: depositAmount / 42500 },
    ETH: { rate: 2300, amount: depositAmount / 2300 },
    USDC: { rate: 1, amount: depositAmount },
  };

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-2xl mx-auto px-4">
        {/* Back Link */}
        <Link href={`/properties/${params.id}`} className="text-white hover:underline mb-6 block">
          ← Retour à la propriété
        </Link>

        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Paiement Sécurisé en Crypto</h1>
            <p className="text-gray-600">{property.title}</p>
          </div>

          {/* Payment Type Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              Type de Paiement
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setPaymentType('DEPOSIT')}
                className={`p-4 rounded-lg border-2 transition ${
                  paymentType === 'DEPOSIT'
                    ? 'border-primary bg-primary bg-opacity-10'
                    : 'border-gray-300 hover:border-primary'
                }`}
              >
                <p className="font-bold text-primary">Dépôt de Garantie</p>
                <p className="text-sm text-gray-600">${depositAmount.toLocaleString()}</p>
                <p className="text-xs text-gray-500">10% du prix</p>
              </button>
              <button
                onClick={() => setPaymentType('FULL')}
                className={`p-4 rounded-lg border-2 transition ${
                  paymentType === 'FULL'
                    ? 'border-primary bg-primary bg-opacity-10'
                    : 'border-gray-300 hover:border-primary'
                }`}
              >
                <p className="font-bold text-primary">Paiement Complet</p>
                <p className="text-sm text-gray-600">${property.price.toLocaleString()}</p>
                <p className="text-xs text-gray-500">100% du prix</p>
              </button>
            </div>
          </div>

          {/* Crypto Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              Sélectionner la Crypto-monnaie
            </label>
            <div className="grid grid-cols-3 gap-4">
              {(['BTC', 'ETH', 'USDC'] as const).map((crypto) => (
                <button
                  key={crypto}
                  onClick={() => setSelectedCrypto(crypto)}
                  className={`p-4 rounded-lg border-2 transition ${
                    selectedCrypto === crypto
                      ? 'border-primary bg-primary bg-opacity-10'
                      : 'border-gray-300 hover:border-primary'
                  }`}
                >
                  <div className="text-3xl mb-2">
                    {crypto === 'BTC' && '₿'}
                    {crypto === 'ETH' && 'Ξ'}
                    {crypto === 'USDC' && '💵'}
                  </div>
                  <p className="font-bold">{crypto}</p>
                  <p className="text-xs text-gray-600">
                    {cryptoPrices[crypto].amount.toFixed(6)}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="font-bold text-lg mb-4">Détails du Paiement</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Montant USD:</span>
                <span className="font-bold">
                  ${(paymentType === 'DEPOSIT' ? depositAmount : property.price).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Montant {selectedCrypto}:</span>
                <span className="font-bold">
                  {(paymentType === 'DEPOSIT'
                    ? cryptoPrices[selectedCrypto].amount
                    : (cryptoPrices[selectedCrypto].amount * 10)
                  ).toFixed(6)}{' '}
                  {selectedCrypto}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Taux ({selectedCrypto}/USD):</span>
                <span>${cryptoPrices[selectedCrypto].rate.toLocaleString()}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total à Payer:</span>
                <span className="text-primary">
                  {(paymentType === 'DEPOSIT'
                    ? cryptoPrices[selectedCrypto].amount
                    : (cryptoPrices[selectedCrypto].amount * 10)
                  ).toFixed(6)}{' '}
                  {selectedCrypto}
                </span>
              </div>
            </div>
          </div>

          {/* Wallet Address */}
          <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg mb-8">
            <h2 className="font-bold text-lg mb-4">Adresse de Paiement</h2>
            <div className="bg-white p-4 rounded border border-blue-300 mb-4 flex items-center justify-between">
              <code className="text-sm break-all">
                {cryptoAddresses[selectedCrypto]}
              </code>
              <button
                onClick={() => handleCopy(cryptoAddresses[selectedCrypto])}
                className="ml-2 text-primary hover:text-opacity-70"
              >
                {copied ? <FaCheckCircle size={20} /> : <FaCopy size={20} />}
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Envoyez exactement <strong>{(paymentType === 'DEPOSIT'
                ? cryptoPrices[selectedCrypto].amount
                : (cryptoPrices[selectedCrypto].amount * 10)
              ).toFixed(6)} {selectedCrypto}</strong> à cette adresse pour finaliser le paiement.
            </p>
          </div>

          {/* QR Code */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 mb-4">Ou scannez le code QR</p>
            <div className="bg-gray-100 w-48 h-48 mx-auto rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Code QR à générer</p>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <h3 className="font-bold text-yellow-800 mb-2">Important</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>✓ Vérifiez l'adresse avant d'envoyer</li>
              <li>✓ Les frais de réseau sont à votre charge</li>
              <li>✓ La transaction peut prendre 10-30 minutes</li>
              <li>✓ Gardez votre hash de transaction pour suivi</li>
            </ul>
          </div>

          {/* Transaction Status */}
          <div className="border-t pt-6 mb-6">
            <h3 className="font-bold text-lg mb-4">Suivi de la Transaction</h3>
            <p className="text-gray-600 mb-4">
              Vous recevrez une confirmation par email une fois le paiement reçu et confirmé sur la blockchain.
            </p>
            <input
              type="text"
              placeholder="Hash de transaction (optionnel)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
              Marquer comme Payé
            </button>
            <button className="w-full border-2 border-primary text-primary py-3 rounded-lg font-bold hover:bg-primary hover:text-white transition">
              Besoin d'aide?
            </button>
          </div>

          {/* Security Info */}
          <div className="mt-8 pt-6 border-t text-center text-gray-600 text-sm">
            <p className="mb-2">🔒 Vos paiements sont sécurisés par des smart contracts Ethereum</p>
            <p>Les fonds seront libérés après confirmation de propriété</p>
          </div>
        </div>
      </div>
    </div>
  );
}
