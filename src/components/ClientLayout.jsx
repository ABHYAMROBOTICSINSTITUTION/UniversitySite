"use client";

import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import TopScroll from "@/components/UI/TopScroll";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isStudentLoginPage = pathname === '/student-login'; 

  return (
    <>
      {!isStudentLoginPage && <TopScroll/>}
      {!isStudentLoginPage && <Navbar />}
      {children}
      <Toaster position="top-right" />
      {!isStudentLoginPage && <Footer />}
    </>
  );
}