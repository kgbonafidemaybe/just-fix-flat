import Image from 'next/image';

export function VanShowcase() {
  return (
    <>
      {/* Comic-style background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                borderRadius: '50%',
                background: i % 2 === 0 ? '#0066B3' : '#FF6B00',
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bangers text-center mb-4 text-justfix-blue">
          Look for Our Vans in Your Neighborhood
        </h2>
        <p className="text-gray-700 mb-12 font-comic max-w-2xl mx-auto">
          Our bright and recognizable service vans bring help right to your doorstep!
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Van image with styling elements */}
        <div className="relative aspect-[16/9] w-full bg-white p-6 rounded-lg shadow-xl mb-8">
          {/* Comic-style "POW" badge */}
          <div className="absolute -top-8 -right-8 bg-justfix-orange text-white font-bangers p-4 rounded-full transform rotate-12 shadow-lg z-10 flex items-center justify-center" style={{ width: '100px', height: '100px' }}>
            <span className="transform -rotate-12 text-2xl">ZOOM!</span>
          </div>
          
          {/* The van image container */}
          <div className="relative h-full w-full">
            <Image
              src="/service-van.svg"
              alt="JustFix Pro Service Van"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
          
          {/* Comic-style speed lines */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-24 overflow-hidden opacity-30 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute h-1 bg-justfix-blue"
                style={{
                  left: `${i * 5}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 100 + 50}px`,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Van features callouts with improved styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-justfix-orange transform hover:scale-105 transition-transform">
            <h3 className="font-marker text-xl mb-2 text-justfix-orange">Professional Fleet</h3>
            <p className="text-gray-700 font-comic">Our branded vans are fully equipped with all the tools and parts needed for any repair job.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-justfix-blue transform hover:scale-105 transition-transform">
            <h3 className="font-marker text-xl mb-2 text-justfix-blue">Always On Time</h3>
            <p className="text-gray-700 font-comic">When you see our van pull up, you'll know help has arrived right on schedule.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-justfix-yellow transform hover:scale-105 transition-transform">
            <h3 className="font-marker text-xl mb-2 text-justfix-yellow">Fully Stocked</h3>
            <p className="text-gray-700 font-comic">We come prepared with everything needed to fix your problem in a single visit.</p>
          </div>
        </div>
        
        {/* Added service area map section */}
        <div className="mt-12 text-center">
          <span className="inline-block bg-justfix-blue text-white font-marker py-2 px-4 rounded-md mb-6">
            SERVICE AREA
          </span>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="font-comic text-gray-700 mb-4">
              Proudly serving the greater metropolitan area including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-100 p-2 rounded font-comic text-sm">Downtown</div>
              <div className="bg-gray-100 p-2 rounded font-comic text-sm">Westside</div>
              <div className="bg-gray-100 p-2 rounded font-comic text-sm">Northpark</div>
              <div className="bg-gray-100 p-2 rounded font-comic text-sm">Eastland</div>
              <div className="bg-gray-100 p-2 rounded font-comic text-sm">South Valley</div>
              <div className="bg-gray-100 p-2 rounded font-comic text-sm">Riverdale</div>
              <div className="bg-gray-100 p-2 rounded font-comic text-sm">Lakeview</div>
              <div className="bg-gray-100 p-2 rounded font-comic text-sm">Hillcrest</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 