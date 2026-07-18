import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import FloatingActions from "@/components/site/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RK Consultant | Commercial Real Estate Experts in Mohali & Chandigarh",
  description: "RK Consultant is Punjab's leading commercial real estate advisory. Find premium offices, showrooms, retail shops, and warehouses in Mohali, Chandigarh, and surrounding areas. Managed by founder Ravi Kant.",
  keywords: "Commercial Real Estate, Mohali, Chandigarh, Office space for rent, Showroom for rent, Retail shop, Warehouse, Ravi Kant, RK Consultant, Real Estate Agent Mohali",
  verification: {
    google: "nTk9236I_TPFzAntZk2fViClNY3Sk_h-GO2wRNmZz9U",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
