import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "../providers/StoreProvider";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { Header } from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Covalenty Front End Challenge",
  description: "Hiring test for front-end position",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <StoreProvider>
          <body>
            <Header />
            {children}
          </body>
        </StoreProvider>
      </html>
    </ReactQueryProvider>
  );
}
