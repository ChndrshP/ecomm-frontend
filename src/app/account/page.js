'use client'

import Link from 'next/link'
import { useState } from 'react'
import { TopHeader } from "@/components/layout/TopHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer"

const AccountPage = () => {
    const [formData, setFormData] = useState({
        firstName: 'Md',
        lastName: 'Rimel',
        email: 'rimel1111@gmail.com',
        address: 'Kingston, 5236, United State',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <TopHeader />
            <Header />
            {/* Breadcrumb and Welcome */}
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex gap-2 text-sm">
                    <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
                    <span className="text-gray-500">/</span>
                    <span className="text-gray-900">My Account</span>
                </div>
                <div className="text-sm">
                    Welcome! <span className="text-red-500">Md Rimel</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-4 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-2">Manage My Account</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="/account" className="text-red-500 hover:text-red-600">My Profile</Link>
                                </li>
                                <li>
                                    <Link href="/account/address" className="text-gray-600 hover:text-gray-900">Address Book</Link>
                                </li>
                                <li>
                                    <Link href="/account/payment" className="text-gray-600 hover:text-gray-900">My Payment Options</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">My Orders</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="/account/returns" className="text-gray-600 hover:text-gray-900">My Returns</Link>
                                </li>
                                <li>
                                    <Link href="/account/cancellations" className="text-gray-600 hover:text-gray-900">My Cancellations</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">
                                <Link href="/account/wishlist" className="text-gray-600 hover:text-gray-900">My Wishlist</Link>
                            </h3>
                        </div>
                    </div>

                    {/* Edit Profile Form */}
                    <div className="col-span-3">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-2xl font-semibold text-red-500 mb-6">Edit Your Profile</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Password Changes</h3>
                                    <div className="space-y-4">
                                        <input
                                            type="password"
                                            name="currentPassword"
                                            placeholder="Current Password"
                                            value={formData.currentPassword}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-red-500"
                                        />
                                        <input
                                            type="password"
                                            name="newPassword"
                                            placeholder="New Password"
                                            value={formData.newPassword}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-red-500"
                                        />
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm New Password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end gap-4">
                                    <button
                                        type="button"
                                        className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AccountPage