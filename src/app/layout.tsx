"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { useReducer } from "react";
import { reducer } from '../redux/reducer'
import { init } from '../redux/init'
import { Provider } from '../context/appCtx'
import { Header } from "@/Header";
import { Footer } from "@/Footer";
import { Menu } from "@/Menu";
import { Login } from "@/Login";

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
          {state?.isLoggedIn ? <Menu /> : <Login />}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
