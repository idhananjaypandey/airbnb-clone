import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

// const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone Using Next App",
};

const font = Nunito({
  subsets: ["latin"],
  })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal actionLabel="Submit" isOpen />
        <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  );
}
