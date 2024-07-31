import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todos",
  description: "Todos app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>
          <Suspense>{children}</Suspense>
        </body>
      </StoreProvider>
    </html>
  );
}
