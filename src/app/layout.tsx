"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import { useReducer } from "react";
import { reducer } from '../redux/reducer'
import { init } from '../redux/init'
import { Provider } from '../context/appCtx'
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Menu } from "@/components/Menu";
import { Login } from "@/components/Login";
import { Loader } from "@/components/shared/Loader";
import { Toaster } from "@/components/shared/Toaster";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, dispatch] = useReducer(reducer, init)

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider value={{ state, dispatch }}>
          <Header />
          {state?.isLoggedIn && <Menu />}
          {children}
          <Footer />
          {state?.isShowLoader && <Loader/>}
          {state?.toaster?.isShowToaster && <Toaster/>}
        </Provider>
      </body>
    </html>
  );
}
