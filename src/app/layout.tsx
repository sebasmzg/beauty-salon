import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "./infraestructure";
import { ModalProvider } from "./infraestructure";
import { Modal } from "@/ui/molecules";

export const metadata: Metadata = {
  title: "Beauty Salon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>
          <AuthProvider>{children}</AuthProvider>
          <Modal />
        </ModalProvider>
      </body>
    </html>
  );
}
