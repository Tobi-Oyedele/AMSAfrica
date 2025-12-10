import Link from "next/link";
const CTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white mb-6">Ready to Join Our Network?</h2>
        <p className="text-emerald-50 mb-8 text-xl">
          Become a member of AMSA and contribute to the future of medical
          education in Africa
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-7 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
};

export default CTA;
