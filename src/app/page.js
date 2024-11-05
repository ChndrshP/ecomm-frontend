'use client'
import { Heart, Search, ShoppingCart, ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import LoginPage from "../app/(auth)/login/page";
import SignupPage from "../app/(auth)/signup/page";
import { TopHeader } from "../components/layout/TopHeader";
import { Header } from "../components/layout/Header";
import {Footer} from "../components/layout/Footer"


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
      <div className="container mx-auto px-4 py-8">
        <div className="relative h-[400px] bg-black rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-between p-12">
            <div className="text-white space-y-4">
              <Image src="/placeholder.svg" alt="iPhone" width={100} height={100} className="mb-4" />
              <h2 className="text-4xl font-bold">Up to 10% off Voucher</h2>
              <Link href="#" className="inline-block border-b-2 border-white pb-1">
                Shop Now
              </Link>
            </div>
            <Image src="/placeholder.svg" alt="iPhone 14" width={300} height={300} className="object-contain" />
          </div>
        </div>
      </div>

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
                <Image src="/placeholder.svg" alt="Product" layout="fill" objectFit="contain" />
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
          {['Phones', 'Computers', 'SmartWatch', 'Camera', 'HeadPhones', 'Gaming'].map((category) => (
            <button
              key={category}
              className="flex flex-col items-center justify-center p-6 border rounded-lg hover:bg-red-500 hover:text-white transition-colors"
            >
              <div className="h-12 w-12 mb-2">
                <Image src="/placeholder.svg" alt={category} width={48} height={48} />
              </div>
              <span className="text-sm">{category}</span>
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
                <Image src="/placeholder.svg" alt="Product" layout="fill" objectFit="contain" />
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
            <Image src="/placeholder.svg" alt="JBL Speaker" width={400} height={400} className="object-contain" />
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
                <Image src="/placeholder.svg" alt="Product" layout="fill" objectFit="contain" />
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
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">New Arrival</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-2 row-span-2 relative h-[600px] bg-black rounded-lg overflow-hidden">
            <div className="absolute inset-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">PlayStation 5</h3>
              <p className="mb-4">Black and White version of the PS5 coming out on sale.</p>
              <Link href="#" className="text-sm border-b border-white">
                Shop Now
              </Link>
            </div>
            <Image src="/placeholder.svg" alt="PS5" layout="fill" objectFit="contain" className="p-8" />
          </div>
          <div className="relative h-[290px] bg-black rounded-lg overflow-hidden">
            <div className="absolute inset-0 p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Women's Collections</h3>
              <p className="text-sm mb-4">Featured woman collections that give you another vibe.</p>
              <Link href="#" className="text-sm border-b border-white">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="relative h-[290px] bg-black rounded-lg overflow-hidden">
            <div className="absolute inset-0 p-8 text-white">
              <h3 className="text-xl font-bold  mb-2">Speakers</h3>
              <p className="text-sm mb-4">Amazon wireless speakers</p>
              <Link href="#" className="text-sm border-b border-white">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="relative h-[290px] bg-black rounded-lg overflow-hidden">
            <div className="absolute inset-0 p-8 text-white">
              <h3 className="text-xl font-bold mb-2">Perfume</h3>
              <p className="text-sm mb-4">GUCCI INTENSE OUD EDP</p>
              <Link href="#" className="text-sm border-b border-white">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-10 border-t">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="p-4 bg-gray-100 rounded-full">
              <Image src="/placeholder.svg" alt="Delivery" width={40} height={40} />
            </div>
            <div>
              <h3 className="font-semibold">FREE AND FAST DELIVERY</h3>
              <p className="text-sm text-gray-500">Free delivery for all orders over $140</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="p-4 bg-gray-100 rounded-full">
              <Image src="/placeholder.svg" alt="Support" width={40} height={40} />
            </div>
            <div>
              <h3 className="font-semibold">24/7 CUSTOMER SERVICE</h3>
              <p className="text-sm text-gray-500">Friendly 24/7 customer support</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="p-4 bg-gray-100 rounded-full">
              <Image src="/placeholder.svg" alt="Guarantee" width={40} height={40} />
            </div>
            <div>
              <h3 className="font-semibold">MONEY BACK GUARANTEE</h3>
              <p className="text-sm text-gray-500">We return money within 30 days</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
