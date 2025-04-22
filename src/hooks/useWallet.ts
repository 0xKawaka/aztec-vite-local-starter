import { useContext } from 'react';
import { WalletContext } from '../contexts/WalletContext';
import { AztecAddress, AccountWalletWithSecretKey } from '@aztec/aztec.js';

/**
 * Hook to access the connected wallet
 * @returns The wallet instance, available wallets, a function to switch wallets, and loading state
 */
export function useWallet(): { 
  wallet: AccountWalletWithSecretKey | undefined; 
  address: AztecAddress | undefined;
  isLoading: boolean;
  error: Error | null;
} {
  const { wallet, address, isLoading, error } = useContext(WalletContext);
  return { wallet, address, isLoading, error };
} 