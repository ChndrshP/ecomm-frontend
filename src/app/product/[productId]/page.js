"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Minus, Plus, Eye, ArrowRight } from "lucide-react"
import { Star } from "lucide-react"

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState("white")
  const [selectedSize, setSelectedSize] = useState("M")
  const [quantity, setQuantity] = useState(2)
  const [selectedImage, setSelectedImage] = useState(0)

  const thumbnails = [
    "https://res.cloudinary.com/dwqbouhmd/image/upload/v1730888469/y8kz0xmqyloi2hg5ask0.png",
    "https://res.cloudinary.com/dwqbouhmd/image/upload/v1730888469/y8kz0xmqyloi2hg5ask0.png",
    "https://res.cloudinary.com/dwqbouhmd/image/upload/v1730888469/y8kz0xmqyloi2hg5ask0.png",
    "https://res.cloudinary.com/dwqbouhmd/image/upload/v1730888469/y8kz0xmqyloi2hg5ask0.png"
  ]

  const relatedProducts = [
    {
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 150,
      discount: 40,
      rating: 4.5,
      reviews: 88,
      image: "https://res.cloudinary.com/dwqbouhmd/image/upload/v1730888469/y8kz0xmqyloi2hg5ask0.png"
    },
    {
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4.5,
      reviews: 75,
      image: "https://res.cloudinary.com/dwqbouhmd/image/upload/v1730888469/y8kz0xmqyloi2hg5ask0.png"
    },
    {
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 4.5,
      reviews: 99,
      image: "https://res.cloudinary.com/dwqbouhmd/image/upload/v1730888469/y8kz0xmqyloi2hg5ask0.png"
    },
    {
      name: "RGB liquid CPU Cooler",
      price: 160,
      originalPrice: 170,
      rating: 4.5,
      reviews: 65,
      image: "https://res.cloudinary.com/dwqbouhmd/image/upload/v1730888469/y8kz0xmqyloi2hg5ask0.png"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-500">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/account" className="hover:text-gray-700">
                Account
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/gaming" className="hover:text-gray-700">
                Gaming
              </Link>
            </li>
            <li>/</li>
            <li>Havic HV G-92 Gamepad</li>
          </ol>
        </nav>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={thumbnails[selectedImage]}
                alt="Product"
                fill
                className="object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square relative rounded-lg overflow-hidden bg-gray-100 ${
                    selectedImage === index ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold">Havic HV G-92 Gamepad</h1>
            
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-500">(150 Reviews)</span>
              <span className="text-green-500 ml-4">In Stock</span>
            </div>

            <div className="text-2xl font-semibold">$192.00</div>

            <p className="text-gray-600">
              PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Colours:</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedColor("white")}
                    className={`w-8 h-8 rounded-full bg-white border ${
                      selectedColor === "white" ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                  <button
                    onClick={() => setSelectedColor("pink")}
                    className={`w-8 h-8 rounded-full bg-pink-500 ${
                      selectedColor === "pink" ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Size:</label>
                <div className="flex gap-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 border rounded ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button className="px-8 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                  Buy Now
                </button>
                <button className="p-2 border rounded hover:bg-gray-50">
                  <Heart className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="space-y-4 border-t pt-6">
              <div className="flex items-start gap-4 p-4 border rounded">
                <div className="p-2 bg-gray-100 rounded">🚚</div>
                <div>
                  <h3 className="font-medium">Free Delivery</h3>
                  <p className="text-sm text-gray-500">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border rounded">
                <div className="p-2 bg-gray-100 rounded">↩️</div>
                <div>
                  <h3 className="font-medium">Return Delivery</h3>
                  <p className="text-sm text-gray-500">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-5 h-10 bg-red-500 rounded-sm" />
            <h2 className="text-red-500 font-semibold">Related Item</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <div key={index} className="group relative">
                <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      -{product.discount}%
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-red-500">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-gray-500">({product.reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}