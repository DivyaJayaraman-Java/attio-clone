export default function Hero() {
  return (
    <section className="bg-white text-center py-20 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6">
        The CRM reimagined for the modern team
      </h1>
      <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
        Attio combines the power of a relational database with the familiarity of a spreadsheet to create the world’s most flexible CRM.
      </p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900">
          Start for free
        </a>
        <a href="#" className="text-black font-semibold underline hover:text-gray-800">
          Book a demo
        </a>
      </div>
    </section>
  );
}
