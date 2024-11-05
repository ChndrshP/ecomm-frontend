import React from 'react';
import { Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 md:py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
                    {/* Subscribe Section */}
                    <div className="space-y-4 sm:col-span-2 lg:col-span-1">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight">Exclusive</h3>
                        <p className="font-medium">Subscribe</p>
                        <p className="text-sm text-gray-300">Get 10% off your first order</p>
                        <div className="relative max-w-xs">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-black border border-white px-4 py-2 rounded-md w-full pr-10 text-sm
                                         focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent
                                         placeholder-gray-400"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:text-gray-300 transition-colors">
                                <Send size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Support Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Support</h3>
                        <div className="space-y-2">
                            <div className="space-y-0">
                                <p className="text-sm text-gray-300">111 Bijoy sarani, Dhaka,</p>
                                <p className="text-sm text-gray-300">DH 1515, Bangladesh.</p>
                            </div>

                            <p className="text-sm text-gray-300">exclusive@gmail.com</p>
                            <p className="text-sm text-gray-300">+88015-88888-9999</p>
                        </div>
                    </div>

                    {/* Account Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Account</h3>
                        <nav className="space-y-2">
                            {['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'].map((item) => (
                                <p key={item}>
                                    <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </p>
                            ))}
                        </nav>
                    </div>

                    {/* Quick Link Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Quick Link</h3>
                        <nav className="space-y-2">
                            {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map((item) => (
                                <p key={item}>
                                    <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </p>
                            ))}
                        </nav>
                    </div>

                    {/* Download App Section */}
                    <div className="space-y-4 sm:col-span-2 lg:col-span-1">
                        <h3 className="text-lg font-bold">Download App</h3>
                        <p className="text-sm text-gray-300">Save $3 with App New User Only</p>
                        <div className="flex flex-row items-center gap-4">
                            <div className="w-24 h-24 bg-white rounded flex items-center justify-center">
                                <span className="text-black text-xs">QR Code</span>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div className="h-10 bg-white rounded flex items-center justify-center">
                                    <span className="text-black text-xs">Google Play</span>
                                </div>
                                <div className="h-10 bg-white rounded flex items-center justify-center">
                                    <span className="text-black text-xs">App Store</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-6 mt-4">
                            {[
                                { Icon: Facebook, label: 'Facebook' },
                                { Icon: Twitter, label: 'Twitter' },
                                { Icon: Instagram, label: 'Instagram' },
                                { Icon: Linkedin, label: 'LinkedIn' }
                            ].map(({ Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    className="hover:text-gray-300 transition-colors"
                                    aria-label={label}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 md:mt-12 pt-8 border-t border-gray-800 text-center">
                    <p className="text-sm text-gray-400">© Copyright Rimel 2022. All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;