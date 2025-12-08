import { ArrowRight, Users, Globe, Award, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const stats = [
    { number: "150+", label: "Member Schools" },
    { number: "45", label: "Countries" },
    { number: "75,000+", label: "Students" },
    { number: "12,000+", label: "Faculty" },
  ];

  const features = [
    {
      icon: Users,
      title: "Collaborative Network",
      description:
        "Connect with leading medical institutions across Africa to share resources and expertise.",
    },
    {
      icon: Globe,
      title: "Pan-African Reach",
      description:
        "Representing medical schools from all regions of the continent.",
    },
    {
      icon: Award,
      title: "Quality Standards",
      description:
        "Setting and maintaining excellence in medical education through accreditation.",
    },
    {
      icon: BookOpen,
      title: "Research Excellence",
      description:
        "Supporting groundbreaking research that addresses Africa's health challenges.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-emerald-700 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h2 className="text-white mb-6 text-5xl md:text-6xl font-semibold leading-tight">
              Association of Medical Schools in Africa
            </h2>
            <p className="mb-8 text-xl text-white/90 leading-relaxed">
              Advancing medical education excellence across the African
              continent through collaboration, innovation, and shared commitment
              to improving healthcare outcomes.
            </p>
            <div className="flex flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/members"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-emerald-700 transition-colors"
              >
                View Members
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white shadow-lg rounded-2xl p-6 border border-gray-100 transition-shadow"
              >
                <p className="text-emerald-600 text-2xl font-semibold mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4 text-4xl font-semibold">
              Why Join AMSA?
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Become part of Africa&apos;s premier network of medical education
              institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 text-emerald-700 rounded-lg mb-4">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-gray-900 text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6 text-3xl font-semibold tracking-tight">
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
                Our programs focus on curriculum innovation, faculty
                development, research collaboration, and quality assurance to
                ensure that African medical schools meet international standards
                while addressing local health priorities.
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
              src="/images/hero-bg.webp"
              alt="image"
              height={400}
              width={400}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Join Our Network?</h2>
          <p className="text-emerald-50 mb-8 text-xl">
            Become a member of AMSA and contribute to the future of medical
            education in Africa
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-emerald-700 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
