import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import About from "@/components/About";
import { FloatingNav } from "@/components/floating-nav";

const inter = Inter({ subsets: ["latin"] });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Mohd Jami Portfolio",
  description: "Mohd Jami Portfolio made using Next.js",
};

const navItems = [{ name: "Home", link: "/" }];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-full bg-background font-sans antialiased z-10",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {" "}
          <FloatingNav navItems={navItems} />
          {/* <Navbar /> */}
          {children}
          <About />
        </ThemeProvider>
      </body>
    </html>
  );
}
