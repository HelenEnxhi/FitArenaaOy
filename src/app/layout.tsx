import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "FitArenaa Oy – AI That Makes Gyms Smarter, More Inclusive, and More Profitable",
  description:
    "FitArenaa Oy is an AI-native SaaS platform for gyms, delivering predictive analytics, inclusivity features, and smarter operations without new hardware.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} bg-[#1e1e2f] text-white antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-[#1e1e2f]">
          <Navbar />
          <main className="flex-1 bg-[#1e1e2f]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

