import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RealmOS — Design your own computer.",
  description: "Build a personal computing environment that's entirely yours. Choose your workspace, your privacy, your identity. Carry it anywhere. RealmOS by Realm Technology.",
  keywords: "personal OS, custom operating system, Nigeria tech, Realm Technology, portable computing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
