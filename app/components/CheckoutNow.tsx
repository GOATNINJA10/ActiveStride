"use client"
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";



export default function CheckoutNow({currency, description, name, image, price, price_id}: ProductCart){
    const {checkoutSingleItem} =useShoppingCart()

    function buyNow(priceId: string){
        checkoutSingleItem(priceId)
    }

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
            buyNow(product.price_id)
        }} variant={'secondary'}>
            Buy Now
        </Button>
    )
}
