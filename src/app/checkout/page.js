'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TopHeader } from "@/components/layout/TopHeader"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phoneNumber: '',
    email: '',
    saveInformation: false,
    paymentMethod: 'bank'
  })

  const [couponCode, setCouponCode] = useState('')

  const cartItems = [
    {
      id: 1,
      name: 'LCD Monitor',
      price: 650,
      image: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730897953/h0msokjmycjh51cslhga.png'
    },
    {
      id: 2,
      name: 'H1 Gamepad',
      price: 1100,
      image: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730897953/clspj3g63hx0vtxlbpbe.png'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link href="/account" className="text-gray-500 hover:text-gray-700">Account</Link>
          <span className="text-gray-500">/</span>
          <Link href="/account" className="text-gray-500 hover:text-gray-700">My Account</Link>
          <span className="text-gray-500">/</span>
          <Link href="/products" className="text-gray-500 hover:text-gray-700">Product</Link>
          <span className="text-gray-500">/</span>
          <Link href="/cart" className="text-gray-500 hover:text-gray-700">View Cart</Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-900">CheckOut</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Billing Details Form */}
          <div>
            <h2 className="text-2xl font-medium mb-8">Billing Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Street Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  required
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Apartment, floor, etc. (optional)</label>
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Town/City<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="townCity"
                  required
                  value={formData.townCity}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="saveInformation"
                  name="saveInformation"
                  checked={formData.saveInformation}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="saveInformation" className="text-sm">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-6 space-y-6">
              {/* Cart Items */}
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded"
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">${item.price}</span>
                </div>
              ))}

              {/* Totals */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="bank"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === 'bank'}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <label htmlFor="bank" className="flex items-center gap-2">
                    Bank
                    <div className="flex flex-row-reverse gap-2">
                      <Image src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730897953/wbfjtoghbhly4sdbstur.png" alt="Klarna" width={24} height={12} />
                      <Image src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730897954/gn7pgxgbfukoa35schm4.png" alt="Visa" width={24} height={12} />
                      <Image src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730897958/sssusi9lrifmab8e9jlm.png" alt="Mastercard" width={24} height={12} />
                    </div>
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="cash"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <label htmlFor="cash">Cash on delivery</label>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-gray-400"
                />
                <button className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                  Apply Coupon
                </button>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                className="w-full py-4 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}