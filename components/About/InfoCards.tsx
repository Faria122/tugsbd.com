const cardData = [
  {
    title: "Customer-Centric",
    description: "Our users and their needs are always our top priority.",
  },
  {
    title: "Innovation-Driven",
    description: "We push boundaries to deliver creative and effective IT solutions.",
  },
  {
    title: "Quality Assurance",
    description: "Our products and services go through strict quality control processes.",
  },
];

export default function InfoCards() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-700">{card.title}</h3>
            <p className="text-gray-600 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
