import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "SellCRE.ai",
  description:
    "Commercial Real Estate Offering Memorandums and Ads created in minutes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
