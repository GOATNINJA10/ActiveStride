"use client"
import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"

interface iAppProps {
  images: any
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0])
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })

  const handleSmallImageClick = (image: any) => {
    setBigImage(image)
    setIsZoomed(false) // Reset zoom if image changes
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.pageX - left) / width) * 100
    const y = ((e.pageY - top) / height) * 100
    setZoomPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsZoomed(true)
  }

  const handleMouseLeave = () => {
    setIsZoomed(false)
  }

  return (
    <div className="grid gap-4 lg:grid-cols-5 -ml-8">
      {/* Small images/thumbnails */}
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
              className="h-full w-full object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
              priority
            />
          </div>
        ))}
      </div>

      {/* Big image with Myntra-like zoom functionality */}
      <div
        className="relative overflow-hidden rounded-lg bg-gray-200 lg:col-span-4"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`h-full w-full transition-transform duration-300 ease-in-out ${
            isZoomed ? "scale-150" : "scale-100"
          }`}
          style={{
            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
          }}
        >
          <Image
            src={urlFor(bigImage).url()}
            width={500}
            height={500}
            alt="photo"
            className="h-full w-full object-center"
            priority
          />
        </div>

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  )
}
