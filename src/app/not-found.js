import React from 'react'
import { TopHeader } from "../components/layout/TopHeader";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer"
import Link from "next/link"

const notfound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <nav className="mb-16">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>404 Error</li>
          </ol>
        </nav>

        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-7xl font-bold mb-8">404 Not Found</h1>
          <p className="text-gray-600 mb-8">Your visited page not found. You may go home page.</p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Back to home page
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default notfound;