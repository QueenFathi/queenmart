// import { Geist, Geist_Mono } from "next/font/google";
import Providers from "./providers";
import "./globals.css";
import Footer from "./ui/footer";
import Navbar from "./ui/nav";
import { Toaster } from "react-hot-toast";
// import RouteProgress from "./lib/route_progress";

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
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <RouteProgress /> */}
        <Providers>
          <Navbar />
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#333",
                color: "#fff",
              },
            }}
          />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
// className={`${geistSans.variable} ${geistMono.variable} antialiased`}
