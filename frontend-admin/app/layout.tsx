import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ControlPanel } from "./_components/mainpage/controlpanel/ControlPanel";
import { MainContainer } from "./_components/mainpage/maincontainer/MainContainer";
import { Header } from "./_components/mainpage/maincontainer/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex">
          <ControlPanel />
          <div className="flex flex-col w-full ml-[365px]">
            <Header />
            <div className="pt-[70px]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
