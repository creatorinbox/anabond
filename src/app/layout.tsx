import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anabond",
  description: "Anabond, the pioneer in Adhesive Company in India. Explore Our range of high-quality anaerobic, silicone, polymer, epoxy solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
