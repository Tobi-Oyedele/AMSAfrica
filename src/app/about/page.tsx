import { Target, Eye, CheckCircle } from "lucide-react";
import Image from "next/image";

const about = () => {
  const objectives = [
    {
      description:
        "To facilitate the association of medical schools and medical educators throughout Africa.",
    },
    {
      description:
        "To aid the exchange and dissemination of knowledge and ideas in medical education.",
    },
    {
      description:
        "To encourage research in medical education and its related fields.",
    },
    {
      description:
        "To address issues of the demography of medical education in Africa.",
    },
    {
      description:
        "To promote and improve minimum and higher standards of medical education and practice in Africa.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white pt-24 pb-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-white mb-6 text-5xl md:text-6xl font-semibold leading-tight">
            About AMSA
          </h1>
          <p className="leading-relaxed">
            The Association of Medical Schools in Africa was established in
            Ibadan in 1961 and formally inaugurated at the subsequent meeting in
            Kampala Uganda in December, 1963. The objectives of the Association
            is the advancement of medical education as the driver of effective
            health systems in Africa in all of its aspects.
          </p>
        </div>
      </section>

      {/*Amsa Video */}
      <section className="px-4 py-12">
        <div className="mx-auto w-full max-w-none md:max-w-3xl lg:max-w-5xl">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <video
              src="/videos/amsa-video.mp4"
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/*Anti-terrorism certificate */}
      <section className="px-4 py-12">
        <div className="mx-auto w-full max-w-4xl">
          <h3 className="mb-6 text-center text-xl font-semibold text-gray-800">
            Anti Laundering Certification
          </h3>

          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <Image
              src="/images/anti-terrorisim.png"
              alt="Anti-Terrorism Compliance Certificate"
              width={1200}
              height={1600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Target className="text-blue-700 mr-3" size={32} />
                <h2 className="text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700">
                AMSA works for strengthening of African Medical Schools by
                producing quality graduates that are relevant and responsive to
                societal needs
              </p>
            </div>

            <div className="bg-teal-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Eye className="text-teal-700 mr-3" size={32} />
                <h2 className="text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700">
                AMSA aspires to be the premier organization to enhance standards
                of medical schools and advancing sustainable development and
                quality of medical education for the achievement of a healthy
                Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4 text-4xl font-bold">
              Our Objectives
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              The core objectives that drive our mission to advance medical
              education across Africa
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="flex items-start bg-blue-50 p-6 rounded-lg"
              >
                <div className="shrink-0 mr-4">
                  <CheckCircle className="text-primary" size={24} />
                </div>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
