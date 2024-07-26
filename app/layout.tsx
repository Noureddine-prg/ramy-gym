import Navbar from "./components/Navbar";
import "./styles/Global.css";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden !scroll-smooth bg-[#181818]">
      <body className="flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
