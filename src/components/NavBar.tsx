"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Function to update time every second
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());
    };

    updateTime(); // Set initial time
    const timerId = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  return (
    <header className="text-gray-600 body-font bg-gray-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <div className="group relative">
              <Image
                src="/images/1.png"
                alt="Icon description"
                width={60}
                height={80}
                className="w-15 h-15 text-white bg-bl-500 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110 group-focus:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"></div>
            </div>
          <span className="ml-3 text-xl">Canvas Blog</span>
        </a>
        
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900 hover:underline"><b>Home</b></Link>
          <Link href={"/blog"} className="mr-5 hover:text-gray-900 hover:underline"><b>Blogs</b></Link>
          <Link href={"/about"} className="mr-5 hover:text-gray-900 hover:underline"><b>About</b></Link>
          <Link href={"/contact"} className="mr-5 hover:text-gray-900 hover:underline"><b>Contact</b></Link>
          <Link href={"/joinus"} className="mr-5 hover:text-gray-900 hover:underline"><b>join us</b></Link>
          <Link href={"/stayconnected"} className="mr-5 hover:text-gray-900 hover:underline"><b>stay connected</b></Link>
        </nav>
        <div className="mr-5 text-sm text-gray-500 ">
          <span>{currentTime}</span>
        </div>
        
      </div>
    </header>
  );
}
