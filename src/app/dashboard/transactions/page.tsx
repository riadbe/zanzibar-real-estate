'use client';

import { FaCheckCircle, FaClock, FaTimesCircle } from 'react-icons/fa';

export default function TransactionsPage() {
  const transactions = [
    {
      id: 1,
      propertyTitle: 'Villa Luxe - Stone Town',
      amount: '0.5 ETH',
      amountUSD: '$1,150',
      type: 'DEPOSIT',
      status: 'COMPLETED',
      date: '2025-01-20',
      txHash: '0x742d35cc6634c0532925a3b844bc9e7595f5beb5',
    },
    {
      id: 2,
      propertyTitle: 'Maison Beachfront',
      amount: '0.25 BTC',
      amountUSD: '$10,625',
      type: 'FULL_PAYMENT',
      status: 'PENDING',
      date: '2025-01-25',
      txHash: '0x1234567890abcdef1234567890abcdef12345678',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return <FaCheckCircle className="text-green-500" />;
      case 'PENDING':
        return <FaClock className="text-yellow-500" />;
      case 'FAILED':
        return <FaTimesCircle className="text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'Confirmée';
      case 'PENDING':
        return 'En attente';
      case 'FAILED':
        return 'Échouée';
      default:
        return status;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-3xl font-bold mb-6">Mes Transactions Crypto</h1>

      {transactions.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b-2 border-primary">
              <tr>
                <th className="text-left py-3 px-4">Propriété</th>
                <th className="text-left py-3 px-4">Montant</th>
                <th className="text-left py-3 px-4">Type</th>
                <th className="text-left py-3 px-4">Statut</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Détails</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <p className="font-bold">{tx.propertyTitle}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="font-bold">{tx.amount}</p>
                    <p className="text-gray-600 text-xs">{tx.amountUSD}</p>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-primary text-white rounded text-xs font-bold">
                      {tx.type === 'DEPOSIT' ? 'Dépôt' : 'Paiement'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(tx.status)}
                      <span>{getStatusLabel(tx.status)}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {new Date(tx.date).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="py-3 px-4">
                    <a
                      href={`https://etherscan.io/tx/${tx.txHash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-xs"
                    >
                      Voir sur Etherscan
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">Vous n'avez pas encore de transactions</p>
        </div>
      )}

      {/* Payment Guide */}
      <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4">
        <h3 className="font-bold text-blue-900 mb-2">Comment Payer en Crypto?</h3>
        <ol className="text-sm text-blue-800 space-y-1">
          <li>1. Sélectionnez une propriété</li>
          <li>2. Cliquez sur "Payer en Crypto"</li>
          <li>3. Choisissez votre crypto-monnaie et le type de paiement</li>
          <li>4. Envoyez le montant exact à l'adresse fournie</li>
          <li>5. Attendez la confirmation sur la blockchain</li>
        </ol>
      </div>
    </div>
  );
}
