"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "product"][0...4] | order(_createdAt desc){
    _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }`;

  const Products = await client.fetch(query);
  return Products;
}

export default function Newest() {
  const [Products, setProducts] = useState<simplifiedProduct[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getData();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight to-gray-900">
            Our Newest Products
          </h2>
          <Link href="/all" className="text-primary flex items-center gap-x-1 cursor-pointer">
            See All{" "}
            <span><ArrowRight /></span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            Products.map((product) => (
              <div key={product._id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Link href={`/product/${product.slug}`}>
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                    priority
                  />
                  </Link>
                </div>

                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm font-semibold to-gray-700">
                            <Link href={`/product/${product.slug}`}>
                                {product.name}
                            </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
                    {/* <div>
                    <span className="mb-0.5 text-red-500 line-through">
                                ₹{product.price+6000}
                                </span>
                    </div> */}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
