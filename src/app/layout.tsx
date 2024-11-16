import type { Metadata } from "next";
import "@/styles/globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  variable: '--font-poppins',
})

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
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  );
}
