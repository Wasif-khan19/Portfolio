import Aboutme from "@/components/Views/Aboutme";
import Footer from "@/components/Views/Footer";
import Hero from "@/components/Views/Hero";
import Navbar from "@/components/Views/Navbar";
import { SparklesPreview } from "@/components/ui/stars";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
     <SparklesPreview/>
     <Aboutme/>
     <Footer/>
   </div>
  );
}
