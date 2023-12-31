import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { PT_Sans, Public_Sans, Red_Hat_Display } from "next/font/google";
import "./globals.css";




const primaryBackgroundColor = process.env.themeColors.primaryBackgroundColor;
const bgUrl = process.env.bgUrl;


const pt = PT_Sans({
  subsets: ["latin"],
  variable: "--pt-sens",
  weight: ["400", "700"],
});
const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--red-hat-display",
  weight: ["400", "700", "300", "500", "800", "900"],
});
const publicSens = Public_Sans({
  subsets: ["latin"],
  variable: "--public-sens",
  weight: ["400", "700", "300", "500", "800", "900"],
});

export const metadata = {
  title: "Tadawi AI",
  description: "AI Assistant",
};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body style={{ background: `url(${bgUrl}) , ${primaryBackgroundColor} ` ,  }}
      
        className={`${pt.variable} ${redHatDisplay.variable} ${publicSens.variable}`}
      >
        <main className=" h-full relative">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
