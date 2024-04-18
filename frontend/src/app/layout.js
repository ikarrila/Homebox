import { Inter } from "next/font/google";
// import "./globals.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CookiePopup from '../../components/CookiePopup';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} main-container`}>
        <div className="flex flex-col min-h-screen">
          <Navbar /> {/* use Navbar component */}
          <div className="flex-grow">
            {children}
          </div>
          <CookiePopup />
          <Footer /> {/* use Footer component */}
        </div>
      </body>
    </html >
  );
}