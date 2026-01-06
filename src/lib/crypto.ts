// lib/crypto.ts
import { ethers } from 'ethers';

interface CryptoPaymentConfig {
  walletAddress: string;
  amount: number;
  currency: 'BTC' | 'ETH' | 'USDC';
}

interface PaymentResult {
  txHash: string;
  status: 'PENDING' | 'CONFIRMED' | 'FAILED';
  amount: number;
  currency: string;
}

// Initialize Ethereum provider
const getProvider = () => {
  const rpcUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
  return new ethers.JsonRpcProvider(rpcUrl);
};

// Get exchange rates
export const getCryptoPrices = async (): Promise<{
  BTC: number;
  ETH: number;
  USDC: number;
}> => {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,usd-coin&vs_currencies=usd'
    );
    const data = await response.json();
    return {
      BTC: data.bitcoin.usd,
      ETH: data.ethereum.usd,
      USDC: data['usd-coin'].usd,
    };
  } catch (error) {
    console.error('Failed to fetch crypto prices:', error);
    return { BTC: 42500, ETH: 2300, USDC: 1 };
  }
};

// Calculate crypto amount from USD
export const calculateCryptoAmount = (
  usdAmount: number,
  currency: 'BTC' | 'ETH' | 'USDC',
  exchangeRate: number
): number => {
  return usdAmount / exchangeRate;
};

// Validate Ethereum address
export const isValidEthAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

// Create payment transaction
export const createPaymentTransaction = async (
  config: CryptoPaymentConfig
): Promise<PaymentResult> => {
  const provider = getProvider();

  try {
    const privateKey = process.env.PRIVATE_KEY;
    if (!privateKey) throw new Error('PRIVATE_KEY not configured');

    const wallet = new ethers.Wallet(privateKey, provider);

    // For USDC payments, we would need to interact with the USDC contract
    // This is a simplified example
    const tx = {
      to: config.walletAddress,
      value: ethers.parseEther(config.amount.toString()),
    };

    const transaction = await wallet.sendTransaction(tx);
    const receipt = await transaction.wait();

    return {
      txHash: transaction.hash,
      status: receipt ? 'CONFIRMED' : 'PENDING',
      amount: config.amount,
      currency: config.currency,
    };
  } catch (error) {
    console.error('Payment transaction failed:', error);
    throw error;
  }
};

// Monitor transaction status
export const getTransactionStatus = async (
  txHash: string
): Promise<'PENDING' | 'CONFIRMED' | 'FAILED'> => {
  try {
    const provider = getProvider();
    const receipt = await provider.getTransactionReceipt(txHash);

    if (!receipt) return 'PENDING';
    if (receipt.status === 1) return 'CONFIRMED';
    return 'FAILED';
  } catch (error) {
    console.error('Failed to check transaction status:', error);
    return 'PENDING';
  }
};
