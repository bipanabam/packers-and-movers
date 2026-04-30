import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nepal Packers and Movers",
  description: "Nepal Packers and Movers is a trusted name in the moving industry, providing reliable and efficient packing and moving services across Nepal. With a team of experienced professionals, we ensure a smooth and hassle-free relocation experience for our customers. Whether you're moving locally or internationally, we offer comprehensive solutions tailored to your specific needs. Our commitment to quality and customer satisfaction sets us apart as a leading packers and movers company in Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
