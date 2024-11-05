import React from 'react';
import { Search, Heart, ShoppingCart, User } from 'lucide-react';

export const Header = () => {
  return (
    <header className="py-4 px-6 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="hover:text-gray-600 border-b-2 border-black">Home</a>
          <a href="/contact" className="hover:text-gray-600">Contact</a>
          <a href="/about" className="hover:text-gray-600">About</a>
          <a href="/signup" className="hover:text-gray-600">Sign Up</a>
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
            <button className="relative">
              <Heart size={24} />
            </button>
            <button className="relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
            <button>
              <User size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};