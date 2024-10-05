"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import Image from "next/image";
import Link from "next/link";
import { client } from "../lib/sanity";

// Component to load the 3D sneaker model
// function SneakerModel() {
//     const { scene } = useGLTF('/models/nike_sneaker.glb', true); // Ensure this path is correct

//     if (!scene) {
//         return <p>Loading...</p>; // Display loading message until the model is ready
//     }

//     return <primitive object={scene} scale={0.7} />;
// }

export default function Hero() {
    const [data, setData] = useState(null);

    // Fetch data from Sanity using useEffect to ensure client-side execution
    useEffect(() => {
        async function fetchData() {
            const query = "*[_type == 'heroImage'][0]";
            const result = await client.fetch(query);
            setData(result);
        }

        fetchData();
    }, []);

    return (
        <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8" style={{ marginTop: "-32px" }}>
            <div className="mb-8 flex flex-wrap justify-between md:mb-16" id="hero">
                <div className="mb-4 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-12">
                    <h1 className="text-3xl font-bold text-black sm:text-5xl md:mb-5 md:text-5xl">
                        Top Fashion for the best price!
                    </h1>
                    <p className="max-w-md leading-relaxed text-primary font-semibold xl:text-lg">
                        Shop Smart, Look Sharp – Fashion and Quality at Unbeatable Prices. Discover the Style You Deserve, Delivered Right to Your Door!
                    </p>
                </div>

                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3" style={{ paddingLeft: "30px", marginTop: "30px" }}>
                    <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0 hover:scale-105 transition-transform duration-300">
                        <Image
                            src="https://cdn.sanity.io/images/hqzzm7v3/production/277b56c3a32830cca27849eb787736d84e7940f6-570x700.webp"
                            alt="Great Photo"
                            className="h-full w-full object-center"
                            width={400}
                            height={400}
                            style={{ width: "350px", height: "400px" }}
                            priority
                        />
                    </div>

                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:scale-105 transition-transform duration-300">
                        <Image
                            src="https://cdn.sanity.io/images/hqzzm7v3/production/30ac7f1819c7fa02aa785f82ea63a81ab7c9a9d2-570x700.webp"
                            alt="Great Photo"
                            className="h-full w-full object-center"
                            width={400}
                            height={400}
                            style={{ width: "350px", height: "400px" }}
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border ">
                    <Link href="/Men" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-200 active:bg-gray-300">
                        Men
                    </Link>
                    <Link href="/Women" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-200 active:bg-gray-300">
                        Women
                    </Link>
                    <Link href="/Teens" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-200 active:bg-gray-300">
                        Teens
                    </Link>
                </div>
            </div>

            {/* 3D Sneaker Model */}
            {/* <div className="flex justify-center items-center mt-12 -mb-16 ">
                <Canvas style={{ height: 300, width: 500 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[0, 0, 1]} />
                    <SneakerModel />
                    <OrbitControls enableZoom={false} />
                    <Environment preset="city" />
                </Canvas>
            </div> */}
        </section>
    );
}
