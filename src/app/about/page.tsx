import { Target, Eye, CheckCircle } from "lucide-react";

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
      <section className="bg-primary text-white py-24">
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
            <h2 className="text-gray-900 mb-4 text-4xl font-semibold">
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

      {/* Impact Numbers */}
      <section className="py-20 bg-gray-50 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4 text-4xl font-semibold">
              Our Impact
            </h2>
            <p className="text-gray-600">
              Making a difference in medical education across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-gray-600">
            <div className="text-center">
              <div className="text-primary text-2xl font-semibold mb-2">
                55+
              </div>
              <p className="text-gray-700 font-medium">Years of Service</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-2xl font-semibold mb-2">
                500,000+
              </div>
              <p className="text-gray-700 font-medium">Doctors Trained</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-2xl font-semibold mb-2">
                2,500+
              </div>
              <p className="text-gray-700 font-medium">Research Publications</p>
            </div>
            <div className="text-center">
              <div className="text-primary text-2xl font-semibold mb-2">
                100+
              </div>
              <p className="text-gray-700 font-medium">Annual Programs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
