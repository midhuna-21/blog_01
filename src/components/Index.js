import sections from "../../public/data/section";
import SectionLeft from "../components/SectionLeft";
import SectionRight from "../components/SectionRight";

export default function IndexPage() {
  const activeSection = sections[0];

  return (
 <div className="bg-black text-white flex justify-center min-h-[calc(100vh-4rem)]">
  <div className="w-full max-w-6xl flex flex-col md:flex-row p-6 gap-15 mt-6 mb-6">
    <SectionLeft section={activeSection} />
    <SectionRight sections={sections} activeSlug={activeSection.slug} />
  </div>
</div>

  );
}
