import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{
          backgroundColor: "grey",
          padding: "lrem",
        }}
      >
        <p>Header</p></header>
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            color: "black",
            padding: "lrem",
          }}>
            <p>Footer</p></footer></body>
    </html>
  );
}
