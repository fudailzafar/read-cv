import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/ui/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Morgan - Product Designer",
  description: "Product designer focused on creating intuitive and engaging experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg text-text antialiased selection:bg-black selection:text-white`}>
        <Container>
          <main>{children}</main>
        </Container>
      </body>
    </html>
  );
}
