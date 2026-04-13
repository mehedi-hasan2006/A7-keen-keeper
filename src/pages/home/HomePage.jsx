import Hero from "@/components/Hero/Hero";
import ProgressNumber from "@/components/ProgressNumber/ProgressNumber";

function HomePage() {
  return (
    <div className="bg-[#F8FAFC]">
      <div className="max-w-285 mx-auto">
        <Hero></Hero>
        <ProgressNumber></ProgressNumber>
      </div>
    </div>
  );
}

export default HomePage;
