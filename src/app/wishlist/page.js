'use client'

import Link from 'next/link'
import { TopHeader } from "@/components/layout/TopHeader"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Eye, Star, Trash2 } from 'lucide-react'
import Image from 'next/image'

const Wishlist = () => {
    const wishlistItems = [
        {
            id: '1',
            name: 'Gucci duffle bag',
            price: 960,
            originalPrice: 1160,
            image: 'https://res.cloudinary.com/dwqbouhmd/image/upload/v1730889361/jhsk8bhpie3nno84eqip.png',
            discount: '35%'
        },
        {
            id: '2',
            name: 'RGB liquid CPU Cooler',
            price: 1960,
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
            price: 560,
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

    return (
        <div className="min-h-screen bg-white">
            <TopHeader />
            <Header />
            <main className="max-w-[1170px] mx-auto px-4 py-16">
                <div className="mb-16">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-base font-normal">Wishlist ({wishlistItems.length})</h2>
                        <button className="px-4 py-1 border border-black rounded hover:bg-gray-50">
                            Move All To Bag
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {wishlistItems.map(product => (
                            <div key={product.id} className="group">
                                <div className="relative bg-[#F5F5F5] rounded-sm mb-4">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={270}
                                        height={250}
                                        className="w-full h-[250px] object-contain p-4"
                                    />
                                    {product.discount && (
                                        <span className="absolute top-3 left-3 bg-[#DB4444] text-white px-3 py-1 text-xs">
                                            -{product.discount}
                                        </span>
                                    )}
                                    <button className="absolute top-3 right-3 p-1 bg-white rounded-full">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                                <h3 className="font-medium mb-2">{product.name}</h3>
                                <div className="flex gap-3 mb-2">
                                    <span className="text-[#DB4444]">${product.price}</span>
                                    {product.originalPrice && (
                                        <span className="text-gray-500 line-through">${product.originalPrice}</span>
                                    )}
                                </div>
                                <button className="w-full py-2 bg-black text-white hover:bg-gray-900 transition-colors">
                                    Add To Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center mb-10">
                        <div className="flex items-center gap-4">
                            <div className="w-5 h-10 bg-[#DB4444] rounded-sm" />
                            <h2 className="text-base font-normal">Just For You</h2>
                        </div>
                        <button className="text-[#DB4444] hover:text-red-600">
                            See All
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {recommendedItems.map(product => (
                            <div key={product.id} className="group">
                                <div className="relative bg-[#F5F5F5] rounded-sm mb-4">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={270}
                                        height={250}
                                        className="w-full h-[250px] object-contain p-4"
                                    />
                                    {product.discount && (
                                        <span className="absolute top-3 left-3 bg-[#DB4444] text-white px-3 py-1 text-xs">
                                            -{product.discount}
                                        </span>
                                    )}
                                    {product.isNew && (
                                        <span className="absolute top-3 left-3 bg-[#00FF66] text-white px-3 py-1 text-xs">
                                            NEW
                                        </span>
                                    )}
                                    <button className="absolute top-3 right-3 p-1 bg-white rounded-full">
                                        <Eye className="w-5 h-5" />
                                    </button>
                                </div>
                                <h3 className="font-medium mb-2">{product.name}</h3>
                                <div className="flex gap-3 mb-2">
                                    <span className="text-[#DB4444]">${product.price}</span>
                                    {product.originalPrice && (
                                        <span className="text-gray-500 line-through">${product.originalPrice}</span>
                                    )}
                                </div>
                                {product.rating && (
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 text-[#FFAD33] fill-[#FFAD33]"
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500">({product.reviews})</span>
                                    </div>
                                )}
                                <button className="w-full py-2 bg-black text-white hover:bg-gray-900 transition-colors">
                                    Add To Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Wishlist