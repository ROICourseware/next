import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Menu from "./components/menu/menu";
import BookSearch from "./components/books/book-search";
import { SessionProvider } from "next-auth/react";

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
      <SessionProvider>
          <Menu />  
        </SessionProvider>
        <BookSearch />
        <div id="portal"></div>
        <br />
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
