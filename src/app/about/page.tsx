import { Target, Users, Globe, Award, History, Eye, Heart } from "lucide-react";

const about = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-white mb-6 text-5xl md:text-6xl font-semibold leading-tight">
            About AMSA
          </h1>
          <p className="leading-relaxed">
            Building a stronger future for medical education across Africa
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Target className="text-blue-700 mr-3" size={32} />
                <h2 className="text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700">
                To advance the quality of medical education in Africa through
                collaboration, innovation, and advocacy, ensuring that all
                African medical schools have the resources and support needed to
                train competent, compassionate healthcare professionals who can
                address the continent&apos;s health challenges.
              </p>
            </div>

            <div className="bg-teal-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Eye className="text-teal-700 mr-3" size={32} />
                <h2 className="text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700">
                A future where every African medical school delivers world-class
                education, produces research that transforms healthcare
                delivery, and graduates physicians who are equipped to meet the
                diverse health needs of African communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
