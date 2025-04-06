import Image from 'next/image';

export function VanShowcase() {
  return (
    <section className="py-16 bg-gradient-to-b from-justfix-yellow/20 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Look for Our Vans in Your Neighborhood
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* The van image container */}
          <div className="relative aspect-[4/3] md:aspect-[16/9] w-full">
            {/* Replace with your actual van image path */}
            <Image
              src="/service-van.svg"
              alt="JustFix Pro Service Van"
              fill
              className="object-contain"
            />
          </div>
          
          {/* Van features callouts */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-justfix-orange">
              <h3 className="font-bold text-xl mb-2">Professional Fleet</h3>
              <p className="text-gray-700">Our branded vans are fully equipped with all the tools and parts needed for any repair job.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-justfix-blue">
              <h3 className="font-bold text-xl mb-2">Always On Time</h3>
              <p className="text-gray-700">When you see our van pull up, you'll know help has arrived right on schedule.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-justfix-yellow">
              <h3 className="font-bold text-xl mb-2">Fully Stocked</h3>
              <p className="text-gray-700">We come prepared with everything needed to fix your problem in a single visit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 