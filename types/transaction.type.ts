import type { Invoice } from './invoice.type';

export interface Transaction {
  id: string;
  reference: string;
  invoice_id: string;
  branch_id: null;
  company_id: null;
  amount: number;
  status: string;
  channel: string;
  narration: null;
  created_at: Date;
  updated_at: Date;
  invoice: { meta: Invoice['meta'] };
}
