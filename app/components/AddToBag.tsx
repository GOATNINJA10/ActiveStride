"use client"
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart{
    price: number;
    name: string;
    description: string;
    currency: string;
    image: any;
    price_id: string;
}


export default function AddToBag({currency, description, name, image, price, price_id}: ProductCart){
    
    
    const {addItem,handleCartClick} =useShoppingCart()
    const product = {
        name: name,
        description: description,
        image: urlFor(image).url(),
        price: price,
        currency: currency,
        price_id: price_id
    }
    return (
        <Button onClick={() => {
            addItem(product)
            handleCartClick()
        }}>
            Add to Cart
        </Button>
    )
}