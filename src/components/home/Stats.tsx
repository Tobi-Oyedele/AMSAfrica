const Stats = () => {
  const stats = [
    { number: "150+", label: "Member Schools" },
    { number: "45", label: "Countries" },
    { number: "75,000+", label: "Students" },
    { number: "12,000+", label: "Faculty" },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <p className="text-primary text-2xl font-semibold mb-2">
                {stat.number}
              </p>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
