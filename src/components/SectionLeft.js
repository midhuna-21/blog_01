import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function SectionLeft({ section }) {
    if (!section) return null;

    return (
        <div className="md:w-1/2 flex flex-col">
            <h1 className="md:text-4xl text-2xl font-semibold uppercase leading-tight mb-4">
                {section.title}
            </h1>

            <div className="w-full relative flex items-start justify-start bg-black mb-4 h-[300px] sm:h-[350px]">
                <Image
                    src={section.image}
                    alt={section.title}
                    width={450}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                />
            </div>

            <p
                className="text-[11px] md:text-[13px] text-white/60 mt-2 text-justify md:[word-spacing:-0.1em] [word-spacing:-0.1em]"
        
            >
                {section.description}
            </p>

            {/* Social links below the description */}
            <div className="mt-6">
                <SocialLinks />
            </div>
        </div>
    );
}
