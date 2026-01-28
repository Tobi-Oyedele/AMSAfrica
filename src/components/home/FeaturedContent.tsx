import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const FeaturedContent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-gray-900 mb-6 text-3xl font-bold tracking-tight">
              Transforming Medical Education in Africa
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              AMSA brings together the brightest minds in medical education to
              tackle the continent&apos;s most pressing healthcare challenges.
              Through our collaborative approach, we&apos;re creating a new
              generation of healthcare professionals equipped with world-class
              skills and African-centered perspectives.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our programs focus on curriculum innovation, faculty development,
              research collaboration, and quality assurance to ensure that
              African medical schools meet international standards while
              addressing local health priorities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
            >
              Explore Our Programs
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          <Image
            src="/images/medical-doctors.png"
            alt="image"
            height={400}
            width={400}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
