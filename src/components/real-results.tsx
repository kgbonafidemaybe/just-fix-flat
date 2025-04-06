import Image from 'next/image';

export function RealResults() {
  // Array of technician photos with descriptions
  const technicianPhotos = [
    {
      id: 1,
      src: "/technician-1.svg",
      alt: "Technician installing new plumbing fixtures",
      caption: "Plumbing Installation"
    },
    {
      id: 2,
      src: "/technician-2.svg",
      alt: "Technician repairing electrical panel",
      caption: "Electrical Repairs"
    },
    {
      id: 3,
      src: "/technician-3.svg",
      alt: "Technician fixing a door frame",
      caption: "Door Repairs"
    },
    {
      id: 4,
      src: "/technician-4.svg",
      alt: "Technician servicing HVAC system",
      caption: "HVAC Maintenance"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our professional technicians in action, delivering quality repairs and exceptional service to homeowners just like you.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicianPhotos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              {/* Photo */}
              <div className="aspect-[4/3] relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-medium">{photo.caption}</p>
              </div>
              
              {/* Branded Element */}
              <div className="absolute top-4 right-4 bg-justfix-orange text-white text-xs font-bold py-1 px-2 rounded-md shadow-md">
                JUSTFIX PRO
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action below photos */}
        <div className="mt-12 text-center">
          <p className="text-lg font-medium mb-4">
            Our team is ready to tackle your repair needs with the same professionalism and quality.
          </p>
          <button className="bg-justfix-blue hover:bg-justfix-blue/90 text-white font-bold py-3 px-6 rounded-md transition-colors">
            Schedule Your Repair
          </button>
        </div>
      </div>
    </section>
  );
} 