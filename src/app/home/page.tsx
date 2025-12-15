import CTA from "@/components/home/CTA";
import FeaturedContent from "@/components/home/FeaturedContent";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <section>
      <Hero />
      <Features />
      <FeaturedContent />
      <CTA />
    </section>
  );
}
