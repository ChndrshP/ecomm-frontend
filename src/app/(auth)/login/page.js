'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { TopHeader } from "../../../components/layout/TopHeader"
import { Header } from "../../../components/layout/Header"
import { Footer } from "../../../components/layout/Footer"

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') 
    const password = formData.get('password')

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Invalid credentials')
      } else {
        router.push('/account')
        router.refresh()
      }
    } catch (error) {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/account' })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Header />
      <main className="flex-grow grid grid-cols-2 gap-32 max-w-7xl mx-auto py-24 px-12">
        <div className="bg-[#C1DBE3]">
          <img
            src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730886234/gtcy2jdumxibkle3tao4.png"
            alt="Shopping Cart with Phone"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center max-w-md">
          <h2 className="text-4xl font-bold mb-4">Log in to Exclusive</h2>
          <p className="text-gray-600 mb-8">Enter your details below</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
            />

            <div className="flex justify-between items-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#DB4444] text-white px-8 py-2 rounded disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'Log in'}
              </button>
              <a href="/forgot-password" className="text-[#DB4444]">
                Forgot Password?
              </a>
            </div>
          </form>

          <div className="mt-6">
            <button
              onClick={handleGoogleSignIn}
              className="w-full border border-gray-300 py-4 rounded flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <img
                src="https://res.cloudinary.com/dwqbouhmd/image/upload/v1730887123/r89b1f1kifdsavnrdm2j.png"
                alt="Google"
                className="w-6 h-6"
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}