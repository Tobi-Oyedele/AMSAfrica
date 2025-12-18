const page = () => {
  return (
    <div className="min-h-screen">
      {/* Member Schools */}
      <section className="pt-24 pb-14 lg:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4 text-4xl font-bold">
              Progenitor Schools
            </h2>
            <p className="text-gray-600">
              The founding medical schools that laid the foundation of AMSA
              across Africa
            </p>
          </div>

          {/* Progenitor Schools List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900">
                Université de Kinshasa, Faculty of Medicine
              </h4>
              <p className="text-sm text-gray-600">DRC · Established 1954</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900">
                University of Lagos, College of Medicine
              </h4>
              <p className="text-sm text-gray-600">
                Nigeria · Established 1962
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900">
                University of Ibadan
              </h4>
              <p className="text-sm text-gray-600">
                Nigeria · Established 1948
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900">
                Université Cheikh Anta Diop, Faculty of Medicine, Pharmacy &
                Odontology
              </h4>
              <p className="text-sm text-gray-600">
                Senegal · Established 1950
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900">
                University of Gezira, Faculty of Medicine
              </h4>
              <p className="text-sm text-gray-600">Sudan · Established 1978</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900">
                Muhimbili University of Health and Allied Sciences, School of
                Medicine
              </h4>
              <p className="text-sm text-gray-600">
                Tanzania · Established 1963
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900">
                Makerere University Medical School
              </h4>
              <p className="text-sm text-gray-600">Uganda · Established 1949</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
