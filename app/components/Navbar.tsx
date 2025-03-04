"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const links= [
    {name: 'Home', href: '/'},
    {name: 'Men', href: '/Men'},
    {name: 'Women', href: '/Women'},
    {name: 'Teens', href: '/Teens'}
]

export default function Navbar(){
    const pathname = usePathname()
    const {handleCartClick} = useShoppingCart()
    return (
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <h1 className="text-2xl md:text-4xl font-bold cursor-pointer">Active

                        <span className="text-primary">Stride</span>
                    </h1>
                </Link>

                <nav className="hidden gap-12 lg:flex 2xl:ml-16" style={{marginLeft: "240px"}}>
                    {links.map((link, idx) =>(
                        <div key={idx}>
                            {pathname === link.href ?(
                                <Link className="text-lg font-semibold text-primary" href={link.href}>
                                    {link.name}
                                </Link>
                            ):(
                                <Link href={link.href} 
                                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="flex divide-x border-r sm:border-l" style={{marginLeft: "300px"}}>
                    <Button 
                    variant={"outline"} 
                    className="flex flex-col gap-y-1.5 h-12 w-12 sm:w-20 md:h-20 md:w-20 rounded-none"
                    onClick={() => handleCartClick()}
                    >
                        <ShoppingBag />
                        <span className="hidden text-xs font-semibold text-gray-500 sm:black">
                            Cart
                        </span>
                    </Button>
                </div>
                <div>
                    
                </div>

            </div>
        </header>
    )
} 