import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hiveconomy - Master Your Financial Future",
  description: "Comprehensive personal finance tools for budgeting, investing, and financial planning. Take control of your money and build lasting wealth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
