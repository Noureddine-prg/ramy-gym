import Navbar from "./components/Navbar";
import "./styles/Global.css";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth bg-[#181818]">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
