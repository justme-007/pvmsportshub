import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "PVM Sports Hub",
  description: "Premium sports jerseys for true fans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sky-500 text-gray-900 antialiased">
  <Navbar />
  <main className="w-full overflow-x-hidden">{children}</main>
  <Footer />
  <WhatsAppButton />
</body>
    </html>
  );
}