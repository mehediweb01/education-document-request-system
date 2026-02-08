import Container from "@/components/common/Container";
import Navbar from "@/components/common/Navbar";
import { connectDB } from "@/mongodb/connectDB";
import type { Metadata } from "next";
import { Inter, Montserrat, Roboto } from "next/font/google";
import "./globals.css";

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
  // database connect
  await connectDB();

  return (
    <html lang="en">
      <body
        className={` ${inter.variable} ${montserrat.variable} ${roboto.variable} antialiased`}
      >
        <Navbar />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
