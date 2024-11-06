'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Star, Trash2 } from 'lucide-react'
import { TopHeader } from "@/components/layout/TopHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'LCD Monitor',
      price: 650,
      quantity: 1,
      image: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730889361/jhsk8bhpie3nno84eqip.png'
    },
    {
      id: '2',
      name: 'H1 Gamepad',
      price: 550,
      quantity: 2,
      image: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730889361/jhsk8bhpie3nno84eqip.png'
    }
  ])

  const [couponCode, setCouponCode] = useState('')

  const wishlistItems = [
    {
      id: '1',
      name: 'Gucci duffle bag',
      price: 960,
      originalPrice: 1160,
      image: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730889361/jhsk8bhpie3nno84eqip.png',
      discount: '26%'
    },
    {
      id: '2',
      name: 'RGB liquid CPU Cooler',
      price: 1160,
      image: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730889361/jhsk8bhpie3nno84eqip.png'
    },
    {
      id: '3',
      name: 'GP11 Shooter USB Gamepad',
      price: 550,
      image: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730889361/jhsk8bhpie3nno84eqip.png'
    },
    {
      id: '4',
      name: 'Quilted Satin Jacket',
      price: 750,
      image: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730889361/jhsk8bhpie3nno84eqip.png'
    }
  ]

  const recommendedItems = [
    {
      id: '5',
      name: 'ASUS FHD Gaming Laptop',
      price: 960,
      originalPrice: 1160,
      image: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730889361/jhsk8bhpie3nno84eqip.png',
      rating: 5,
      reviews: 65,
      discount: '35%'
    },
    {
      id: '6',
      name: 'IPS LCD Gaming Monitor',
      price: 1160,
      image: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730889361/jhsk8bhpie3nno84eqip.png',
      rating: 5,
      reviews: 65
    },
    {
      id: '7',
      name: 'HAVIT HV-G92 Gamepad',
      price: 550,
      image: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730889361/jhsk8bhpie3nno84eqip.png',
      rating: 5,
      reviews: 65,
      isNew: true
    },
    {
      id: '8',
      name: 'AK-900 Wired Keyboard',
      price: 200,
      image: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730889361/jhsk8bhpie3nno84eqip.png',
      rating: 5,
      reviews: 65
    }
  ]

  const updateQuantity = (id, newQuantity) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-gray-50">
    <TopHeader />
    <Header />
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-900">Cart</span>
        </div>
      </div>

      {/* Cart Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Cart Headers */}
          <div className="grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-gray-600">
            <div className="col-span-6">Product</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2">Quantity</div>
            <div className="col-span-2">Subtotal</div>
          </div>

          {/* Cart Items */}
          <div className="divide-y">
            {cartItems.map(item => (
              <div key={item.id} className="grid grid-cols-12 gap-4 py-4 items-center">
                <div className="col-span-6 flex gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="font-medium">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex items-center gap-2 text-red-500 text-sm mt-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </div>
                <div className="col-span-2">${item.price}</div>
                <div className="col-span-2">
                  <div className="flex border rounded-lg w-24">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 border-r hover:bg-gray-100"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-full text-center focus:outline-none"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 border-l hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-span-2">${item.price * item.quantity}</div>
              </div>
            ))}
          </div>

          {/* Cart Actions */}
          <div className="flex justify-between items-center mt-6">
            <Link
              href="/shop"
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Return To Shop
            </Link>
            <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Update Cart
            </button>
          </div>

          {/* Cart Summary */}
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={e => setCouponCode(e.target.value)}
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  Apply Coupon
                </button>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <h3 className="font-bold text-lg">Cart Total</h3>
              <div className="flex justify-between py-2 border-b">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between py-2 font-bold">
                <span>Total:</span>
                <span>${total}</span>
              </div>
              <button className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
