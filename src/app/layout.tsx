import type { Metadata } from "next";
import { REM } from "next/font/google";
import "./globals.css";

const rem = REM({
  variable: "--font-rem",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Área Sanitaria Luján de Cuyo",
  description: "Encontrá tu centro de salud y posta sanitaria en Luján de Cuyo.",
};

// Define standard layout props for Next.js 15
interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="es"
      className={`${rem.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
