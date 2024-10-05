"use client"

import "./globals.css";
import Navbar from "./components/Navbar";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { SWRConfig } from 'swr';
import { Button } from "@/components/ui/button";
import CartProvider from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";

export const dynamic = "force-dynamic";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey="pk_test_bGlrZWQtbWFuYXRlZS0yMy5jbGVyay5hY2NvdW50cy5kZXYk">
      <SWRConfig value={{ fetcher: (url) => fetch(url).then(res => res.json()) }}>
    <html lang="en">
      <body
      >
          <CartProvider>
          <div className="flex justify-evenly">
          <Navbar />
          <ShoppingCartModal />
            <div className="float-end">
            <div className="mt-6" style={{marginLeft: "-20px"}}>
            <SignedOut>
              <Button><SignInButton mode="modal"/></Button>
            </SignedOut>
            </div>
            
            <div className="mt-7" style={{marginLeft: "-20px"}}>
              <SignedIn>
                <UserButton />
            </SignedIn>
            </div>
            </div>
            
          </div>
          
          
          
        {children}
        </CartProvider>
       
      </body>
    </html>
    </SWRConfig>
    </ClerkProvider>
  );
}
