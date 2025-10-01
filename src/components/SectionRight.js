import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function SectionRight({ sections, activeSlug }) {
    return (
        <div className="md:w-1/2 flex flex-col md:space-y-9 space-y-7 flex-1 md:py-14">
            {sections.map((section, idx) => (
                <Link
                    key={idx}
                    href={`/${section.slug}`}
                    className="text-left group cursor-pointer transition-all duration-300"
                >
                    <div className="transition-all duration-300 hover:translate-x-2">
                        <h2
                            className={`text-lg font-normal uppercase ${section.slug === activeSlug
                                ? "text-white/40"
                                : "text-white group-hover:text-white/80"
                                }`}
                        >
                            {section.title}
                        </h2>
                        <p
                            className={`text-sm mt-1 ${section.slug === activeSlug
                                ? "text-white/30"
                                : "text-white/60 group-hover:text-white/80"
                                }`}
                        >
                            {section.text}
                        </p>
                        <hr
                            className={`mt-2 ${section.slug === activeSlug
                                ? "border-white/20"
                                : "border-white/40 group-hover:border-white"
                                }`}
                        />
                    </div>
                </Link>
            ))}

            {/* <SocialLinks /> */}
        </div>
    );
}
