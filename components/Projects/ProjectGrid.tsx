const projects = [
  {
    title: "Tank Foundation",
    category: "Asiatic Oil Company North Potenga, Chittagong",
    image: "/images/image2.jpg",
  },
  {
    title: "New Storage Tank",
    category: "Standard Asiatic Oil Company",
    image: "/images/image3.jpg",
  },
  {
    title: "Jetty Pipeline",
    category: "Standard Asiatic Oil Company",
    image: "/images/image5.jpg",
  },
  
];

export default function ProjectsGrid() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-blue-700">Featured Projects</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="shadow-md rounded-lg overflow-hidden bg-white hover:shadow-lg transition">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
              <p className="text-sm text-blue-500">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
