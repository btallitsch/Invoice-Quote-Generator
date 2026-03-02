"use client";

import React, { useState } from "react";
import { InvoiceData, InvoiceType } from "@/types";

type FormState = {
  clientName: string;
  clientEmail: string;
  description: string;
  amount: string; // string in form, converted to number on submit
  type: InvoiceType;
};

interface Props {
  onGenerate: (data: InvoiceData) => void;
}

export default function InvoiceForm({ onGenerate }: Props) {
  const [form, setForm] = useState<FormState>({
    clientName: "",
    clientEmail: "",
    description: "",
    amount: "",
    type: "invoice",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "type") {
      setForm((prev) => ({
        ...prev,
        type: value as InvoiceType,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const invoiceData: InvoiceData = {
      clientName: form.clientName,
      clientEmail: form.clientEmail,
      description: form.description,
      amount: parseFloat(form.amount),
      type: form.type,
      date: new Date().toLocaleDateString(),
    };

    onGenerate(invoiceData);
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Create Invoice / Quote</h2>

      <input
        name="clientName"
        placeholder="Client Name"
        value={form.clientName}
        onChange={handleChange}
        required
      />

      <input
        name="clientEmail"
        placeholder="Client Email"
        value={form.clientEmail}
        onChange={handleChange}
        required
      />

      <input
        name="description"
        placeholder="Service Description"
        value={form.description}
        onChange={handleChange}
        required
      />

      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        required
      />

      <select name="type" value={form.type} onChange={handleChange}>
        <option value="invoice">Invoice</option>
        <option value="quote">Quote</option>
      </select>

      <button type="submit">Generate</button>
    </form>
  );
}
