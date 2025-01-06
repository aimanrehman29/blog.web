import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12 m-20">
      <div className="flex items-center animation-fadeIn">
        <Image
          className="w-20 h-20 rounded-full mr-4 object-cover border-2 border-blue-500"
          src="/images/image (1).png"
          alt="Author Image"
          width={200}
          height={200}
        />
        <div>
          <h3 className="text-xl font-bold">Aiman Rehman</h3>
          <p className="text-slate-500">
            Writter | SEO Expert | Web Developer
          </p>
        </div>
      </div>
      <p className="mt-4 text-black leading-relaxed">
      Frontend Developer and UI/UX Designer crafting seamless user experiences with Figma, React, and Next.js.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aiman-rehman-77463b2b2/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-700 transition duration-300"
        >
          <FaLinkedin size={24}  />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/aimanrehman29"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-800 transition duration-300"
        >
          <FaGithub size={24}  />
        </a>
      </div>
    </div>
  );
}
