"use client";
import React from "react";
import { InvoiceData } from "@/types";
import jsPDF from "jspdf";

export default function InvoicePreview({ data }: { data: InvoiceData }) {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`${data.type.toUpperCase()}`, 10, 10);
    doc.text(`Client: ${data.clientName}`, 10, 20);
    doc.text(`Email: ${data.clientEmail}`, 10, 30);
    doc.text(`Description: ${data.description}`, 10, 40);
    doc.text(`Amount: $${data.amount.toFixed(2)}`, 10, 50);
    doc.text(`Date: ${data.date}`, 10, 60);
    doc.save(`${data.type}-${data.clientName}.pdf`);
  };

  return (
    <div className="card">
      <h2>Preview</h2>
      <p><strong>Type:</strong> {data.type}</p>
      <p><strong>Client:</strong> {data.clientName}</p>
      <p><strong>Email:</strong> {data.clientEmail}</p>
      <p><strong>Description:</strong> {data.description}</p>
      <p><strong>Amount:</strong> ${data.amount.toFixed(2)}</p>
      <p><strong>Date:</strong> {data.date}</p>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}