import Container from "@/components/common/Container";
import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import Loading from "@/loading";
import type { Metadata } from "next";
import { Inter, Montserrat, Roboto } from "next/font/google";
import dns from "node:dns/promises";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "./globals.css";

if (process.env.NODE_ENV === "development") {
  dns.setServers(["1.1.1.1"]);
}

const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Education document request system",
  description:
    "Educational Document Request & Approval System with role based access.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} ${montserrat.variable} ${roboto.variable} antialiased`}
      >
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Container>{children}</Container>
        </Suspense>
        <Footer />
        <ToastContainer autoClose={2000} position="top-right" theme="colored" />
      </body>
    </html>
  );
}
