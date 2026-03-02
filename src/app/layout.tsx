import "./globals.css";
import React from "react";

export const metadata = {
  title: "Invoice & Quote Generator"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <h1>Invoice & Quote Generator</h1>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}