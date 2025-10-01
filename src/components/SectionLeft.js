import Image from "next/image";

export default function SectionLeft({ section }) {
    if (!section) return null;

    return (
        <div className="md:w-1/2 flex flex-col">
            <h1 className="md:text-5xl text-3xl font-semibold capitalize leading-tight mb-4">
                {section.title}
            </h1>
            <div className="w-full relative flex items-start justify-start bg-black mb-4 h-[300px] sm:h-[400px]">
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
                className="text-sm text-white/60 mt-2 text-justify"
                style={{ wordSpacing: "-0.1em" }}
            >
                {section.description}
            </p>
        </div>
    );
}
