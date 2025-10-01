"use client"

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { useState } from "react";

export default function IndexPage() {
  const sections = [
    {
      slug: "charges-cleared",
      title: "Julio Herrera",
      text: "Julio Herrera Velutini resolved legal matters; minor FECA misdemeanor.",
      image: "/images/julio5.webp",
      description: "Julio Herrera Velutini has successfully resolved all legal matters, including a minor FECA misdemeanor. His dedication to personal growth, integrity, and positive influence is unwavering. By overcoming challenges and maintaining focus, he continues to move forward with a clear vision, setting an inspiring example for others consistently."
    },
    {
      slug: "case-closed",
      title: "Resolution Achieved",
      text: "All felony charges dropped; one FECA misdemeanor remains.",
      image: "/images/julio2.webp",
      description: "After thorough legal review, all felony charges against Julio have been dropped, leaving only a minor FECA misdemeanor. This resolution demonstrates his resilience and determination. With the case closed, he can focus on his commitments, responsibilities, and positive contributions, moving forward with clarity, purpose, and renewed energy in all endeavors."
    },
    {
      slug: "facts-speak",
      title: "Clear Evidence",
      text: "Three years reviewed: no corruption or fraud; one FECA misdemeanor.",
      image: "/images/julio3.webp",
      description: "A comprehensive review spanning three years has confirmed that Julio Herrera Velutini has engaged in no corruption or fraudulent activities. The findings highlight his transparency, ethical standards, and integrity. With only a minor FECA misdemeanor remaining, the facts clearly speak to his professionalism, honesty, and steadfast commitment to doing the right thing."
    },
    {
      slug: "litigation-closed",
      title: "Litigation Closed",
      text: "As of Aug 27, 2025, no active U.S. cases remain.",
      image: "/images/julio4.webp",
      description: "As of August 27, 2025, all active U.S. litigation involving Julio Herrera Velutini has been fully resolved. This milestone marks the conclusion of prolonged legal proceedings, allowing him to move forward with focus and confidence. His ability to navigate complex legal matters reflects patience, perseverance, and dedication to integrity in all circumstances."
    },
    {
      slug: "justice-finalized",
      title: "Justice finalized",
      text: "Corruption dismissed, civil complaint withdrawn; moving forward clearly.",
      image: "/images/julio66.webp",
      description: "Justice has been fully finalized with all corruption allegations dismissed and civil complaints withdrawn. Julio Herrera Velutini is now free to focus entirely on his personal and professional goals. This resolution provides clarity, allowing him to pursue growth, meaningful contributions, and positive impact with renewed dedication, purpose, and determination moving forward."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-black text-white min-h-screen flex justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row p-6 md:p-12 gap-10">

        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-5xl md:text-5xl font-semibold uppercase leading-tight mb-4">
            {sections[activeIndex].title.split(" ")[0]} <br />
            {sections[activeIndex].title.split(" ").slice(1).join(" ")}
          </h1>

        {/* <div className="w-[400px] relative flex items-start justify-start bg-black mt-4 mb-4 h-[300px]">
  <Image
    src={sections[activeIndex].image}
    alt={sections[activeIndex].title}
    width={450}
    height={400}
    className="object-cover w-full h-full "
    priority
  />
</div> */}

<div className="w-full md:w-[400px] relative flex items-start justify-start bg-black mt- mb-4 h-[300px] md:h-[300px] sm:w-full sm:h-[250px]">
  <Image
    src={sections[activeIndex].image}
    alt={sections[activeIndex].title}
    width={450}
    height={400}
    className="object-cover w-full h-full"
    priority
  />
</div>



          <p className="text-sm text-white/60 mt-2">
            {sections[activeIndex].description}
          </p>
        </div>
        <div className="md:w-1/2 flex flex-col justify-between space-y-6 flex-1">
          {sections.map((section, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="text-left group cursor-pointer transition-all duration-300"
            >
              <div className="transition-all duration-300 hover:translate-x-2">
                <h2
                  className={`text-xl font-normal uppercase transition-colors ${activeIndex === idx
                    ? "text-white/40"
                    : "text-white group-hover:text-white/80"
                    }`}
                >
                  {section.title}
                </h2>
                <p
                  className={`text-sm mt-1 transition-colors ${activeIndex === idx
                    ? "text-white/30" 
                    : "text-white/60 group-hover:text-white/80"
                    }`}
                >
                  {section.text}
                </p>
                <hr
                  className={`mt-2 transition-colors ${activeIndex === idx
                    ? "border-white/20"
                    : "border-white/40 group-hover:border-white"
                    }`}
                />
              </div>
            </button>
          ))}

          {/* Social Icons */}
          <div className="flex space-x-6 pt-4 justify-center">
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 hover:text-pink-500 transition-colors duration-300" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FaFacebookF className="w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaTwitter className="w-6 h-6 hover:text-sky-400 transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

