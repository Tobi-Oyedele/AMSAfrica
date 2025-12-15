import Image from "next/image";
import { leadership } from "@/data/team";

const page = () => {
  return (
    <section className="min-h-screen py-18 lg:py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-4xl font-semibold">
            Leadership Team
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Distinguished medical educators and researchers leading AMSA into
            the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={leader.image}
                alt={leader.name}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-blue-600 mb-2">{leader.role}</p>
                <p className="text-gray-600">{leader.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
