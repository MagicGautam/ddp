import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '@/services';
import moment from 'moment'; 
import Image from 'next/image';


const Header = () => {
  const [categories, setCategories] = useState([]);
  const currentDate = moment().format('dddd, MMMM Do YYYY'); 
  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <div className="bg-white-500 py-4 text-white text-center">
      <div className="container mx-auto px-10">
      <div className="flex justify-left text-black text-sm font-bold">{currentDate}</div>
        <div className="flex justify-center items-center">
          <Link href="/" className="cursor-pointer font-bold text-4xl mb-2">
             <Image
             unoptimized 
             src="/logo.png" 
             alt="Logo" 
             height={20}
             width={250}
          />
          </Link>
        </div>
        <div className="border-gray-300 border-b h-0 w-full mt-1 mb-1"></div>
            <div className="hidden md:flex ml-10 space-x-4">
                {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`} className="text-black font-semibold cursor-pointer hover:underline">
                    {category.name}
                </Link>
                ))}
            </div>
            <div className="border-gray-300 border-b h-0 w-full mt-1 mb-1"></div>
            <div className="border-gray-300 border-b h-0 w-full mt-1 mb-1"></div>
      </div>
    </div>
  );
};

export default Header;