// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
// import sections from "../../../public/data/section";
// import SocialLinks from "../../components/SocialLinks";

// export default function SectionPage({ params }) {
//   const { slug } = params;
//   const activeSection = sections.find((s) => s.slug === slug);

//   if (!activeSection) return notFound();

//   return (
//     <div className="bg-black text-white min-h-screen flex justify-center">
//       <div className="w-full max-w-5xl flex flex-col md:flex-row p-6 md:p-12 gap-15">
//         {/* Left Section */}
//         <div className="md:w-1/2 flex flex-col">
//           <h1 className="text-5xl font-semibold uppercase leading-tight mb-4">
//             {activeSection.title.split(" ")[0]} <br />
//             {activeSection.title.split(" ").slice(1).join(" ")}
//           </h1>
//           <div className="w-full relative flex items-start justify-start bg-black mb-4 h-[300px] sm:h-[250px]">
//             <Image
//               src={activeSection.image}
//               alt={activeSection.title}
//               width={450}
//               height={400}
//               className="object-cover w-full h-full"
//               priority
//             />
//           </div>
//           <p className="text-sm text-white/60 mt-2 text-justify" style={{ wordSpacing: "-0.2em" }}>
//             {activeSection.description}
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="md:w-1/2 flex flex-col justify-between space-y-6 flex-1">
//           {sections.map((section, idx) => (
//             <Link
//               key={idx}
//               href={`/${section.slug}`}
//               className="text-left group cursor-pointer transition-all duration-300"
//             >
//               <div className="transition-all duration-300 hover:translate-x-2">
//                 <h2
//                   className={`text-xl font-normal uppercase ${
//                     section.slug === slug ? "text-white/40" : "text-white group-hover:text-white/80"
//                   }`}
//                 >
//                   {section.title}
//                 </h2>
//                 <p
//                   className={`text-sm mt-1 ${
//                     section.slug === slug ? "text-white/30" : "text-white/60 group-hover:text-white/80"
//                   }`}
//                 >
//                   {section.text}
//                 </p>
//                 <hr
//                   className={`mt-2 ${
//                     section.slug === slug ? "border-white/20" : "border-white/40 group-hover:border-white"
//                   }`}
//                 />
//               </div>
//             </Link>
//           ))}

//           {/* Social Icons */}
//          <SocialLinks />
//         </div>
//       </div>
//     </div>
//   );
// }


import { notFound } from "next/navigation";
import sections from "../../../public/data/section";
import SectionLeft from "../../components/SectionLeft";
import SectionRight from "../../components/SectionRight";

export async function generateStaticParams() {
  return sections.map((section) => ({
    slug: section.slug,
  }));
}

export default  async function SectionPage({ params }) {
    const { slug } = await params;
    const activeSection = sections.find((s) => s.slug === slug);

    if (!activeSection) return notFound();

    return (
        <div className="bg-black text-white min-h-screen flex justify-center">
            <div className="w-full max-w-5xl flex flex-col md:flex-row p-6 md:p-12 gap-15">
                <SectionLeft section={activeSection} />
                <SectionRight sections={sections} activeSlug={slug} />
            </div>
        </div>
    );
}

