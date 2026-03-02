export type InvoiceType = "invoice" | "quote";

export interface InvoiceData {
  clientName: string;
  clientEmail: string;
  description: string;
  amount: number;
  type: InvoiceType;
  date: string;
}
