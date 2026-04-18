import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "National As Built Inc. — Nationwide As-Built Surveys", template: "%s | National As Built Inc." },
  description: "Laser-measured as-built drawings, Scan-to-CAD, and Matterport 3D surveys across all 50 states, Puerto Rico, and Canada. Founded 2004. Call 972-342-7070.",
  keywords: ["as-built surveys","as-built drawings","scan to cad","matterport","laser scanning","nationwide"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
