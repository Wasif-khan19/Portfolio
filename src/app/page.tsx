import Aboutme from "@/components/Views/Aboutme";
import Footer from "@/components/Views/Footer";
import Hero from "@/components/Views/Hero";
import Navbar from "@/components/Views/Navbar";
import { SparklesPreview } from "@/components/ui/stars";
import { TypewriterEffectSmoothDemo } from "@/components/ui/type";

export default function Home() {
  return (
   <div>
    <Navbar/>
     <Hero/>
     <SparklesPreview/>
     <TypewriterEffectSmoothDemo/>
     <Aboutme/>
     <Footer/>
   </div>
  );
}
