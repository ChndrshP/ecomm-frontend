  import React from "react";
  import { ChevronDown } from "lucide-react"
  import Link from "next/link"

  export const TopHeader = () => {
    return (
      <div className="bg-black text-white py-2.5 text-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/6"></div>
          <div className="flex items-center justify-center gap-3 w-4/6">
            <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
            <Link className="font-semibold underline" href="#">
              ShopNow
            </Link>
          </div>
          <div className="w-1/6 flex justify-end">
            <button className="flex items-center gap-1">
              English
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };
