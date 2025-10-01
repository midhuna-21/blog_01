import sections from "../../public/data/section";
import SectionLeft from "../components/SectionLeft";
import SectionRight from "../components/SectionRight";

export default function IndexPage() {
  const activeSection = sections[0];

  return (
    <div className="bg-black text-white min-h-screen flex justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row p-6 md:mt-0 mt-6 md:p-24 gap-15">
        <SectionLeft section={activeSection} />
        <SectionRight sections={sections} activeSlug={activeSection.slug} />
      </div>
      
    </div>
  );
}
