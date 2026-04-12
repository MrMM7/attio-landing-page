import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Attio — The CRM Company",
  description: "Attio, where CRM becomes easy.",
  keywords: [
    "CRM",
    "Attio",
    "Attio Landing page",
    "Customer Relationship Magic",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const InterFont = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const PoppinsFont = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${InterFont.variable} ${PoppinsFont.variable} font-inter h-full antialiased`}
    >
      <body className="min-h-full flex flex-col mx-6 mt-4">
        <Navbar />
        <div className="grow">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
