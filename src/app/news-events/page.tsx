import { newsData } from "@/data/news";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white pt-24 pb-18 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-white mb-6 text-5xl md:text-6xl font-semibold leading-tight">
            News & Events
          </h1>
          <p className="leading-relaxed">
            Stay informed about the latest news, developments, and events
            shaping medical education across Africa.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="p-6 rounded-lg transform transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="w-full mb-4">
                <Image
                  src={news.image}
                  alt={news.title}
                  width={400}
                  height={400}
                  className="w-full h-96 object-center rounded-lg"
                />
              </div>

              {/* Text */}
              <div>
                <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
                <p className="text-gray-500 mb-2">{news.date}</p>
                {news.description && (
                  <p className="text-gray-700">{news.description}</p>
                )}

                {news.link && (
                  <div className="pt-6 ml-auto">
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-sm bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                    >
                      {news.linkText || "Learn More"}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
