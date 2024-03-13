import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prueba tecnica",
  description: "Prueba tecnica Pagatodo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body
        className={inter.className}
        style={{
          position: "relative",
        }}
      >
        <div
          id="loader"
          style={{
            display: "none",
          }}
        >
          <div className="loader">Cargando...</div>
        </div>
        <header>
          <h1>Prueba tecnica</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p className="text-center">
            Prueba tecnica por Eric Uriel Trejo Trejo
          </p>
        </footer>
      </body>
    </html>
  );
}
