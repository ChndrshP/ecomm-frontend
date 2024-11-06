"use client"

import React, { useState } from 'react'
import { Search, Heart, ShoppingCart, User, ShoppingBag, X, Star, LogOut } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const Header = () => {
  const pathname = usePathname()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="py-4 px-6 border-b relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Exclusive</h1>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`hover:text-gray-600 ${pathname === '/' ? 'border-b-2 border-black' : ''
              }`}
          >
            Home
          </Link>
          <Link
            href="/contact"
            className={`hover:text-gray-600 ${pathname === '/contact' ? 'border-b-2 border-black' : ''
              }`}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className={`hover:text-gray-600 ${pathname === '/about' ? 'border-b-2 border-black' : ''
              }`}
          >
            About
          </Link>
          <Link
            href="/signup"
            className={`hover:text-gray-600 ${pathname === '/signup' ? 'border-b-2 border-black' : ''
              }`}
          >
            Sign Up
          </Link>
        </nav>

        <div className="flex items-center gap-4 ml-auto md:ml-0">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 px-4 py-2 rounded-md pr-10 w-full md:w-64"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
          <div className="flex items-center gap-4">
            <Link href="/wishlist" passHref>
              <button className="relative">
              <Heart size={24} />
                <span className="absolute text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>
            </Link>

            <Link href="/cart" passHref>
              <button className="relative">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>
            </Link>

            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative"
            >
              <User size={24} />
            </button>

            {/* User Dropdown */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 rounded-lg shadow-lg overflow-hidden z-50">
                <div className="bg-gradient-to-b from-gray-700 to-gray-800 text-white py-2">
                  <Link href="/account" passHref>
                    <button
                      className="w-full px-4 py-2 flex items-center gap-3 hover:bg-white/10 transition-colors"
                    >
                      <User size={20} />
                      <span>Manage My Account</span>
                    </button>
                  </Link>
                  <button
                    className="w-full px-4 py-2 flex items-center gap-3 hover:bg-white/10 transition-colors"
                    onClick={() => {/* Handle orders */ }}
                  >
                    <ShoppingBag size={20} />
                    <span>My Order</span>
                  </button>
                  <button
                    className="w-full px-4 py-2 flex items-center gap-3 hover:bg-white/10 transition-colors"
                    onClick={() => {/* Handle cancellations */ }}
                  >
                    <X size={20} />
                    <span>My Cancellations</span>
                  </button>
                  <button
                    className="w-full px-4 py-2 flex items-center gap-3 hover:bg-white/10 transition-colors"
                    onClick={() => {/* Handle reviews */ }}
                  >
                    <Star size={20} />
                    <span>My Reviews</span>
                  </button>
                  <Link href="/" passHref>
                    <button
                      className="w-full px-4 py-2 flex items-center gap-3 hover:bg-white/10 transition-colors"
                    >
                      <User size={20} />
                      <span>Logout</span>
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}