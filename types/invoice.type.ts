interface LineItem {
  name: string;
  quantity: number;
  unit_price: number;
  description: string;
  discount_type: string;
  discount_value: number;
}

export interface Invoice {
  id: string;
  company_id: string;
  reference_number: string;
  agent_id: string;
  branch_id: string;
  amount: number;
  amount_paid: number;
  currency: string;
  naira_amount: number;
  line_items: Array<LineItem>;
  status: string;
  type: string;
  narration: string;
  created_at: Date;
  updated_at: Date;
  outstanding_amount: number;
  meta?: {
    agent_name: string;
    branch_name: string;
    client_name: string;
    branch_email: string;
    branch_phone: string;
    client_email: string;
    client_phone: string;
    company_name: string;
    branch_address: string;
  };
}

export interface ExtraInvoiceDetails {
  branch_account: {
    id: string;
    branch_id: string;
    terminal_id: string;
    bank_name: string;
    account_number: string;
    account_name: string;
    last_updated_by: string;
    created_at: Date;
    updated_at: Date;
  };
}
