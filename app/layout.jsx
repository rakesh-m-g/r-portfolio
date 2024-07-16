import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Variable, Weight } from "lucide-react";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
// import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  Weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  Variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Rakesh",
  description: " Fullstack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.Variable}>
        <Header />
        {/* <StairTransition /> */}
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
