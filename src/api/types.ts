export interface transactionsInterface {
  amount: number;
  metadata: {
    name: string;
    type: string;
    email: string;
    quantity: number;
    country: string;
    product_name: string;
  };
  payment_reference: string;
  status: string;
  type: string;
  date: string;
}
[];
export interface WalletInterface {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

export interface User {
  first_name: string;
  last_name: string;
  email: string;
}
