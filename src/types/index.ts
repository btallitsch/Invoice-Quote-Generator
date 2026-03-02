export interface InvoiceData {
  clientName: string;
  clientEmail: string;
  description: string;
  amount: number;
  type: "invoice" | "quote";
  date: string;
}