import Image from 'next/image';

export function RealResults() {
  // Array of technician photos with descriptions
  const technicianPhotos = [
    {
      id: 1,
      src: "/technician-1.svg",
      alt: "Technician installing new plumbing fixtures",
      caption: "Plumbing Installation",
      location: "Lakeview Home",
      time: "1.5 hours"
    },
    {
      id: 2,
      src: "/technician-2.svg",
      alt: "Technician repairing electrical panel",
      caption: "Electrical Repairs",
      location: "Downtown Apartment",
      time: "45 minutes"
    },
    {
      id: 3,
      src: "/technician-3.svg",
      alt: "Technician fixing a door frame",
      caption: "Door Repairs",
      location: "Westside Condo",
      time: "1 hour"
    },
    {
      id: 4,
      src: "/technician-4.svg",
      alt: "Technician servicing HVAC system",
      caption: "HVAC Maintenance",
      location: "Northpark Home",
      time: "2 hours"
    }
  ];

  return (
    <>
      {/* Comic-style background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 right-0 bg-justfix-yellow/10 w-64 h-64 rounded-full transform -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-20 left-0 bg-justfix-blue/10 w-96 h-96 rounded-full transform translate-y-1/4 -translate-x-1/3"></div>
      </div>
      
      {/* Starburst header decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 bg-justfix-orange rounded-full opacity-20 animate-pulse"></div>
          <div className="relative bg-justfix-orange text-white font-bangers py-2 px-6 rounded-full text-lg">
            BEFORE & AFTER
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bangers mb-4 text-justfix-blue">Real Results</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto font-comic">
          Our professional technicians in action, delivering quality repairs and exceptional service to homeowners just like you.
        </p>
      </div>

      {/* Photo Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technicianPhotos.map((photo) => (
          <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            {/* Comic-style burst element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-justfix-orange rounded-full transform scale-0 group-hover:scale-100 transition-transform z-10 flex items-center justify-center">
              <p className="text-white font-marker text-sm transform -rotate-12">{photo.time}</p>
            </div>
            
            {/* Photo */}
            <div className="aspect-[4/3] relative">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Comic-style overlay pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-justfix-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
            
            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-marker">{photo.caption}</p>
              <p className="text-white/80 text-sm font-comic">{photo.location}</p>
            </div>
            
            {/* Branded Element */}
            <div className="absolute top-4 right-4 bg-justfix-orange text-white text-xs font-bangers py-1 px-2 rounded-md shadow-md transform rotate-3">
              JUSTFIX PRO
            </div>
          </div>
        ))}
      </div>
      
      {/* Customer testimonial box */}
      <div className="mt-12 bg-white border-2 border-dashed border-justfix-blue p-6 rounded-lg max-w-3xl mx-auto relative">
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white px-4">
          <span className="font-marker text-justfix-blue text-xl">What Our Customers Say</span>
        </div>
        <p className="italic text-gray-700 font-comic text-center">
          "JustFix Pro arrived within the hour and fixed our leaking sink. The technician was professional, friendly, and cleaned up perfectly after the job. Excellent service!"
        </p>
        <div className="flex items-center justify-center mt-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-justfix-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 font-comic text-gray-600">— Maria J.</span>
        </div>
      </div>
      
      {/* Call to action below photos */}
      <div className="mt-12 text-center">
        <p className="text-lg font-marker mb-4 text-gray-800">
          Our team is ready to tackle your repair needs with the same professionalism and quality.
        </p>
        <button className="bg-justfix-blue hover:bg-justfix-blue/90 text-white font-bangers py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          SCHEDULE YOUR REPAIR
        </button>
      </div>
    </>
  );
} 