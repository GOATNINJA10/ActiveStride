"use client"
import { ReactNode } from "react"
import {CartProvider as USCProvider} from "use-shopping-cart"

export default function CartProvider({children}: {children: ReactNode}){
    return(
        <USCProvider 
        mode="payment" 
        cartMode="client-only" 
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
        currency="INR"
        successUrl="https://active-stride.vercel.app/stripe/success"
        cancelUrl="https://active-stride.vercel.app/stripe/error"
        billingAddressCollection={true}
        shouldPersist={true}
        language="en-US"
        >
            {children}
        </USCProvider>
    )
}
