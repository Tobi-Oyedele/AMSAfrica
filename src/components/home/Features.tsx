import { Users, Globe, Award, BookOpen } from "lucide-react";

const Features = () => {
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-4xl font-bold">
            Why Join AMSA?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Become part of Africa&apos;s premier network of medical education
            institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl border border-gray-200"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-lg mb-4">
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
  );
};

export default Features;
