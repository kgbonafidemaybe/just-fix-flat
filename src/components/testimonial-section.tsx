import Image from 'next/image';

export function TestimonialSection() {
  return (
    <section className="py-16 bg-justfix-blue relative overflow-hidden">
      {/* Background stripes - comic style */}
      <div className="absolute inset-0 flex">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="flex-1 transform rotate-12 bg-justfix-darkblue opacity-40"
            style={{ marginLeft: i % 2 ? '20px' : '0' }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Homeowners<br />
              Choose JustFix Pro
            </h2>
            <p className="text-lg mb-6">
              We're not just another handyman service – 
              we're your neighborhood's superhero squad. From
              frozen pipes to flickering lights, we handle it fast,
              fair and with no runaround.
            </p>
            
            {/* Add more content here if needed */}
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white rounded-3xl p-5 relative">
              {/* Comic style speech bubble pointer */}
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 0L0 0L20 40L40 0Z" fill="white"/>
                </svg>
              </div>
              
              <div className="p-4">
                <p className="text-xl font-medium mb-4">
                  "JustFix Pro came through during the coldest week of winter. Pipes froze - done in under an hour!"
                </p>
                
                <div className="flex items-center">
                  <div className="flex text-justfix-yellow">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-3 text-gray-700 font-medium">- Sarah T.</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">Cathedral Area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 