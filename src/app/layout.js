import { Geist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Provider from "./lib/provider";
import { ToastContainer } from "react-toastify";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "Keen Keeper",
  description: "A Friend to Keep Your Keen Insights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${geist.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Provider>
          <NavBar />
          {children}
           <ToastContainer />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
