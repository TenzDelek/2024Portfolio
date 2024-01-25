import { Inter,Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import PreLoader from "./Components/PreLoader";


const inter = Inter({ subsets: ["latin"] });
const lora=Lora({
  subsets:["latin"],
  weight:"400",
  variable:"--font-lora"
})
export const metadata = {
  title: "NavBurger",
  description: "trying",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${inter.className}`}>
      
        <div className=" bg-[#E8E8E3] m-0 box-border h-screen w-full p-4">
        <PreLoader />
        <Navbar/>
        {children}
        </div></body>
    </html>
  );
}
