"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { TopHeader } from "../../../components/layout/TopHeader"
import { Header } from "../../../components/layout/Header"
import { Footer } from "../../../components/layout/Footer"
import Image from "next/image"
import Link from "next/link"

export default function SignUpPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (result?.error) {
        setError("Failed to create account")
        return
      }

      router.push("/")
    } catch (error) {
      setError("An error occurred. Please try again.")
    }
  }

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Header />
      <main className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 max-w-7xl mx-auto py-12 md:py-24 px-4 md:px-12">
        {/* Left Side - Image */}
        <div className="bg-[#C1DBE3] rounded-lg overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730886234/gtcy2jdumxibkle3tao4.png"
            alt="Shopping Cart with Phone"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="flex flex-col justify-center max-w-md">
          <h2 className="text-4xl font-medium mb-3">Create an account</h2>
          <p className="text-gray-600 mb-8">Enter your details below</p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email or Phone Number"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-4 rounded hover:bg-red-600 transition-colors"
            >
              Create Account
            </button>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full border border-gray-300 py-4 rounded flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <Image
                src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730887123/r89b1f1kifdsavnrdm2j.png"
                alt="Google"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              Sign up with Google
            </button>

            <div className="text-center text-gray-600">
              Already have account?{" "}
              <Link href="/login" className="text-gray-900 hover:underline">
                Log In
              </Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}