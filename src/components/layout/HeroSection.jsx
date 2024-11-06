"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(2)

  const categories = [
    { name: "Woman's Fashion", hasSubmenu: true },
    { name: "Men's Fashion", hasSubmenu: true },
    { name: "Electronics", hasSubmenu: false },
    { name: "Home & Lifestyle", hasSubmenu: false },
    { name: "Medicine", hasSubmenu: false },
    { name: "Sports & Outdoor", hasSubmenu: false },
    { name: "Baby's & Toys", hasSubmenu: false },
    { name: "Groceries & Pets", hasSubmenu: false },
    { name: "Health & Beauty", hasSubmenu: false },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Categories Sidebar */}
        <div className="hidden md:block w-64 space-y-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center justify-between py-0.5 text-gray-600 hover:text-gray-900"
            >
              {category.name}
              {category.hasSubmenu && <ChevronRight className="h-4 w-4" />}
            </Link>
          ))}
        </div>

        {/* Hero Banner */}
        <div className="flex-1">
          <div className="relative h-[400px] w-[1100] bg-black rounded-lg overflow-hidden">
            <div className="absolute inset-0 p-12 flex items-center">
              <div className="text-white space-y-6">
                <div className="flex items-center gap-5">
                  <Image
                    src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730877011/ym3cenk4n0jrzza3ffdw.png"
                    alt="Apple"
                    width={40}
                    height={40}
                    className="brightness-0 invert"
                  />
                  <span>Iphone 14 Series</span>
                </div>
                <h2 className="text-5xl font-bold">
                  Up to 10%<br />off Voucher
                </h2>
                <Link
                  href="#"
                  className="inline-flex items-center text-sm border-b border-white pb-1 hover:opacity-80"
                >
                  Shop Now
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
              <div className="absolute right-0 bottom-0">
                <Image
                  src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730876631/rocaghxjjmsiupxsy9yq.png"
                  alt="iPhone 14"
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
            </div>
            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
              {[0, 1, 2, 3, 4].map((dot) => (
                <button
                  key={dot}
                  onClick={() => setActiveSlide(dot)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    activeSlide === dot ? "bg-red-500" : "bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${dot + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;