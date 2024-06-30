"use client";

import Navbar from "./components/Navbar";
import { GlobalStyles } from "./styles/Global";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
