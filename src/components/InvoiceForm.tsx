"use client";
import React, { useState } from "react";
import { InvoiceData } from "@/types";

export default function InvoiceForm({ onGenerate }: { onGenerate: (data: InvoiceData) => void }) {
  const [form, setForm] = useState({
    clientName: "",
    clientEmail: "",
    description: "",
    amount: "",
    type: "invoice",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({
      ...form,
      amount: parseFloat(form.amount),
      date: new Date().toLocaleDateString(),
    });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Create Invoice / Quote</h2>
      <input name="clientName" placeholder="Client Name" onChange={handleChange} required />
      <input name="clientEmail" placeholder="Client Email" onChange={handleChange} required />
      <input name="description" placeholder="Service Description" onChange={handleChange} required />
      <input name="amount" type="number" placeholder="Amount" onChange={handleChange} required />
      <select name="type" onChange={handleChange}>
        <option value="invoice">Invoice</option>
        <option value="quote">Quote</option>
      </select>
      <button type="submit">Generate</button>
    </form>
  );
}