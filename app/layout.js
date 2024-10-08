import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "View payment receipt",
  description: "Confirm approved payment invoice",
};

export default function RootLayout({ children }) {
  // const Loading = () => (
  //   <div className="flex items-center justify-center">Loading</div>
  // );
  return (
    <html lang="en">
      <Suspense>
        <body className={inter.className}>{children}</body>
      </Suspense>
    </html>
  );
}
