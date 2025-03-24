import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Menu from "./components/menu/menu";



export const metadata: Metadata = {
  title: "Next Level Book Reactions",
  description: "Where you react to books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Menu />
        <br />
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
