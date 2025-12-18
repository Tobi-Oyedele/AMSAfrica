import CTA from "@/components/home/CTA";
import FeaturedContent from "@/components/home/FeaturedContent";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";

export default function Home() {
  return (
    <section>
      <Hero />
      <Stats />
      <Features />
      <FeaturedContent />
      <CTA />
    </section>
  );
}
