// import { Geist, Geist_Mono } from "next/font/google";
import Providers from "./providers";
import "./globals.css";
import Footer from "./ui/footer";
import Navbar from "./ui/nav";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "QueenMart",
  description: "Your online store for my fashion girlies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
// className={`${geistSans.variable} ${geistMono.variable} antialiased`}
