import { Target, Eye } from "lucide-react";

const about = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
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
      <section className="py-20 bg-white">
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
    </div>
  );
};

export default about;
