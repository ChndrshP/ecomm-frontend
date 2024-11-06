'use client'
import { Heart, Search, ShoppingCart, ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { TopHeader } from "../components/layout/TopHeader";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer"
import HeroSection from "@/components/layout/HeroSection"


export default function Component() {
  const [timeLeft] = useState({
    days: "03",
    hours: "23",
    minutes: "19",
    seconds: "56",
  })

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Flash Sales */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-red-500 font-semibold mb-1">Today's</h3>
            <div className="flex items-center space-x-8">
              <h2 className="text-2xl font-bold">Flash Sales</h2>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="bg-gray-100 px-3 py-1 rounded">{timeLeft.days}</div>
                  <div className="text-xs mt-1">Days</div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 px-3 py-1 rounded">{timeLeft.hours}</div>
                  <div className="text-xs mt-1">Hours</div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 px-3 py-1 rounded">{timeLeft.minutes}</div>
                  <div className="text-xs mt-1">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 px-3 py-1 rounded">{timeLeft.seconds}</div>
                  <div className="text-xs mt-1">Seconds</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 border rounded-full hover:bg-gray-100">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-2 border rounded-full hover:bg-gray-100">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group relative border rounded-lg p-4">
              <div className="relative h-48 mb-4">
                <Image src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730889361/jhsk8bhpie3nno84eqip.png" alt="Product" layout="fill" objectFit="contain" />
                <button className="absolute top-4 right-4 p-1.5 bg-white rounded-full">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <h3 className="font-semibold mb-2">Gaming Controller</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-red-500 font-semibold">$99.99</span>
                <span className="text-gray-400 line-through">$159.99</span>
              </div>
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-500">(99)</span>
              </div>
              <button className="w-full py-2 bg-red-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Browse By Category</h2>
          <div className="flex space-x-2">
            <button className="p-2 border rounded-full hover:bg-gray-100">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-2 border rounded-full hover:bg-gray-100">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { name: 'Phones', imageUrl: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730888814/vf3ywl1ohwnwk0e8bgm2.png' },
            { name: 'Computers', imageUrl: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730888816/r0fp9vqrjgsogphkezbk.png' },
            { name: 'SmartWatch', imageUrl: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730888819/kbmvasl8sq1b56fm2hp9.png' },
            { name: 'Camera', imageUrl: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730888813/gdibxyhtqnaiicsxjuqq.png' },
            { name: 'HeadPhones', imageUrl: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730888818/ucdgoiwewkm0nbcztmsz.png' },
            { name: 'Gaming', imageUrl: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730888817/k2jjeslifpu2xbkhbrsq.png' },
          ].map((category) => (
            <button
              key={category.name}
              className="flex flex-col items-center justify-center p-6 border rounded-lg hover:bg-red-500 hover:text-white transition-colors"
            >
              <div className="h-12 w-12 mb-2">
                <Image src={category.imageUrl} alt={category.name} width={48} height={48} />
              </div>
              <span className="text-sm">{category.name}</span>
            </button>
          ))}
        </div>

      </section>

      {/* Best Selling Products */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-red-500 font-semibold mb-1">This Month</h3>
            <h2 className="text-2xl font-bold">Best Selling Products</h2>
          </div>
          <button className="px-8 py-2 bg-red-500 text-white rounded-md">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group relative border rounded-lg p-4">
              <div className="relative h-48 mb-4">
                <Image src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730889361/jhsk8bhpie3nno84eqip.png" alt="Product" layout="fill" objectFit="contain" />
                <button className="absolute top-4 right-4 p-1.5 bg-white rounded-full">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <h3 className="font-semibold mb-2">The north coat</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-red-500 font-semibold">$260</span>
                <span className="text-gray-400 line-through">$360</span>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-500">(65)</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Music Banner */}
      <section className="container mx-auto px-4 py-8">
        <div className="relative h-[500px] bg-black rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-between p-12">
            <div className="text-white space-y-4">
              <h2 className="text-4xl font-bold">Enhance Your<br />Music Experience</h2>
              <button className="px-8 py-2 bg-green-500 text-white rounded-full">Buy Now</button>
            </div>
            <Image src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730888607/lzveotwracqbgfnihzph.png" alt="JBL Speaker" width={600} height={600} className="object-cover" />
          </div>
        </div>
      </section>

      {/* Explore Products */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Explore Our Products</h2>
          <div className="flex space-x-2">
            <button className="p-2 border rounded-full hover:bg-gray-100">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-2 border rounded-full hover:bg-gray-100">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="group relative border rounded-lg p-4">
              <div className="relative h-48 mb-4">
                <Image src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730889361/jhsk8bhpie3nno84eqip.png" alt="Product" layout="fill" objectFit="contain" />
                <button className="absolute top-4 right-4 p-1.5 bg-white rounded-full">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <h3 className="font-semibold mb-2">Gaming Controller</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-red-500 font-semibold">$160</span>
                <span className="text-gray-400 line-through">$200</span>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-500">(99)</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-8 py-2 bg-red-500 text-white rounded-md">View All Products</button>
        </div>
      </section>

      {/* New Arrival */}
      <section className="container mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2">
            <div className="w-5 h-10 bg-red-500 rounded-sm" />
            <span className="text-red-500 font-semibold">Featured</span>
          </div>
          <h2 className="text-4xl font-bold mt-4">New Arrival</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PlayStation 5 */}
          <div className="relative h-[580px] bg-black rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730881924/f73dkzfsf3mejbbm8r0v.png"
              alt="PlayStation 5"
              fill
              className="object-contain p-12 mt-12"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-bold text-white mb-4">PlayStation 5</h3>
              <p className="text-white/80 mb-4">
                Black and White version of the PS5 coming out on sale.
              </p>
              <Link
                href="#"
                className="text-white text-sm border-b border-white w-fit hover:opacity-80"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Right Column Grid */}
          <div className="grid grid-rows-2 gap-8">
            {/* Women's Collections */}
            <div className="relative h-[280px] bg-black rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730881923/rx5lilonrstbynidkvyu.png"
                alt="Women's Collections"
                fill
                className="object-cover p-0"
              />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Women's Collections</h3>
                <p className="text-white/80 text-sm mb-4">
                  Featured woman collections that give you another vibe.
                </p>
                <Link
                  href="#"
                  className="text-white text-sm border-b border-white w-fit hover:opacity-80"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Bottom Row Grid */}
            <div className="grid grid-cols-2 gap-8">
              {/* Speakers */}
              <div className="relative h-[280px] bg-black rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730881922/jhycdp7mgzkjjmffpife.png"
                  alt="Speakers"
                  fill
                  className="object-contain p-8"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">Speakers</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Amazon wireless speakers
                  </p>
                  <Link
                    href="#"
                    className="text-white text-sm border-b border-white w-fit hover:opacity-80"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>

              {/* Perfume */}
              <div className="relative h-[280px] bg-black rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730881923/xh8pteqwslqdendbkjph.png"
                  alt="Perfume"
                  fill
                  className="object-contain p-8"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">Perfume</h3>
                  <p className="text-white/80 text-sm mb-4">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <Link
                    href="#"
                    className="text-white text-sm border-b border-white w-fit hover:opacity-80"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 border-t">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Free and Fast Delivery */}
          <div className="flex flex-col items-center space-y-2">
            <div className="relative w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730880673/ngh3d6dsquie1jzzjz4i.png"
                alt="Delivery"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="font-semibold">FREE AND FAST DELIVERY</h3>
            <p className="text-sm text-gray-500">Free delivery for all orders over $140</p>
          </div>

          {/* 24/7 Customer Service */}
          <div className="flex flex-col items-center space-y-2">
            <div className="relative w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730880672/tawwfcq54qmuoejavkvf.png"
                alt="Support"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="font-semibold">24/7 CUSTOMER SERVICE</h3>
            <p className="text-sm text-gray-500">Friendly 24/7 customer support</p>
          </div>

          {/* Money Back Guarantee */}
          <div className="flex flex-col items-center space-y-2">
            <div className="relative w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730880673/bdvmu3nbmoxlu1bgpvst.png"
                alt="Guarantee"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="font-semibold">MONEY BACK GUARANTEE</h3>
            <p className="text-sm text-gray-500">We return money within 30 days</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
