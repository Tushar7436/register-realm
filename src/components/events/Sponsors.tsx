export const Sponsors = () => {
  const sponsors = [
    { name: "Sponsor 1", logo: "/placeholder.svg" },
    { name: "Sponsor 2", logo: "/placeholder.svg" },
    { name: "Sponsor 3", logo: "/placeholder.svg" },
    { name: "Sponsor 4", logo: "/placeholder.svg" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-16 opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};