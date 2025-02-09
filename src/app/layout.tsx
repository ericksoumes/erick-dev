import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "erick@dev:~",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex lg:p-40 p-4 box-border m-0 h-dvh w-full overflow-hidden justify-center items-center">
        {children}
      </body>
    </html>
  );
}
