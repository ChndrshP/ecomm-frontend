"use client"

import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { useState } from "react"
import { TopHeader } from "@/components/layout/TopHeader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer"

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="min-h-screen bg-white">
            <TopHeader />
            <Header />
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-8">
                <nav className="text-sm text-gray-500">
                    <ol className="flex items-center space-x-2">
                        <li>
                            <Link href="/" className="hover:text-gray-700">
                                Home
                            </Link>
                        </li>
                        <li>/</li>
                        <li><strong>Contact</strong></li>
                    </ol>
                </nav>
            </div>

            {/* Contact Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-[0.75fr_1fr] gap-8">
                    {/* Left Column - Contact Info */}
                    <div className="bg-white shadow-md rounded-lg p-8">
                        <div className="space-y-12">
                            {/* Call To Us Section */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                        <Phone className="h-5 w-5 text-white" />
                                    </div>
                                    <h2 className="text-xl font-semibold">Call To Us</h2>
                                </div>
                                <p className="text-gray-600 mb-2">We are available 24/7, 7 days a week.</p>
                                <p className="text-gray-600">Phone: +880161111122222</p>
                            </div>

                            <hr className="border-gray-200" />

                            {/* Write To Us Section */}
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                        <Mail className="h-5 w-5 text-white" />
                                    </div>
                                    <h2 className="text-xl font-semibold">Write To US</h2>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Fill out our form and we will contact you within 24 hours.
                                </p>
                                <p className="text-gray-600 mb-2">Emails: customer@exclusive.com</p>
                                <p className="text-gray-600">Emails: support@exclusive.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="bg-white shadow-md rounded-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name *"
                                        required
                                        className="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email *"
                                        required
                                        className="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your Phone *"
                                        required
                                        className="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows={6}
                                    className="w-full px-4 py-3 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                                ></textarea>
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="px-8 py-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage;