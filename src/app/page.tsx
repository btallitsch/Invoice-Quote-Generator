"use client";
import React, { useState } from "react";
import InvoiceForm from "@/components/InvoiceForm";
import InvoicePreview from "@/components/InvoicePreview";
import { InvoiceData } from "@/types";

export default function Home() {
  const [data, setData] = useState<InvoiceData | null>(null);

  return (
    <div className="grid">
      <InvoiceForm onGenerate={setData} />
      {data && <InvoicePreview data={data} />}
    </div>
  );
}