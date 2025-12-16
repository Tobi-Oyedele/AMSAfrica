import { curriculaData } from "@/data/curricular";

const page = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-14 lg:py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-center">
            WHO Africa Competency-Based Curricula
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curriculaData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] flex flex-col"
              >
                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                {/* Buttons */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {item.viewLink && (
                    <a
                      href={item.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-2 text-sm bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition"
                    >
                      View Online
                    </a>
                  )}
                  {item.downloadLink && (
                    <a
                      href={item.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-2 text-sm bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition"
                    >
                      Download PDF
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
