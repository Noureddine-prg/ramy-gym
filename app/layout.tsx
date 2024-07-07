import Navbar from "./components/Navbar";
import "./styles/Global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth bg-black">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
