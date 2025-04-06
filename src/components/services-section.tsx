import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    name: "Plumbing Repairs",
    desc: "Leaky faucets, clogged drains & pipe fixes",
    icon: (
      <svg className="w-12 h-12 text-justfix-blue" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 7C7 5.34315 8.34315 4 10 4H14C15.6569 4 17 5.34315 17 7V10H7V7Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M5 9C3.89543 9 3 9.89543 3 11V13C3 14.1046 3.89543 15 5 15H7V13H5V11H19V13H17V15H19C20.1046 15 21 14.1046 21 13V11C21 9.89543 20.1046 9 19 9H17H7H5Z" fill="currentColor"/>
        <path d="M17 15H15V20H13V15H11V20H9V15H7V17C7 18.1046 7.89543 19 9 19H15C16.1046 19 17 18.1046 17 17V15Z" fill="currentColor"/>
      </svg>
    ),
    bgColor: "bg-justfix-orange/90",
    price: "From $99",
  },
  {
    name: "Electrical Work",
    desc: "Outlets, switches & lighting installation",
    icon: (
      <svg className="w-12 h-12 text-justfix-blue" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C12.5523 2 13 2.44772 13 3V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3C11 2.44772 11.4477 2 12 2Z" fill="currentColor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.5 7.5C7.11929 7.5 6 8.61929 6 10V14C6 15.3807 7.11929 16.5 8.5 16.5H9V20C9 21.1046 9.89543 22 11 22H13C14.1046 22 15 21.1046 15 20V16.5H15.5C16.8807 16.5 18 15.3807 18 14V10C18 8.61929 16.8807 7.5 15.5 7.5H8.5ZM13 16.5V20H11V16.5H13Z" fill="currentColor"/>
      </svg>
    ),
    bgColor: "bg-justfix-lightblue/90",
    price: "From $119",
  },
  {
    name: "General Handyman",
    desc: "Furniture assembly, mounting & more",
    icon: (
      <svg className="w-12 h-12 text-justfix-blue" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M16.7929 2.79289C18.0118 1.57394 19.988 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L18.2071 10.2071C18.4027 10.8023 18.5 11.401 18.5 12C18.5 13.3261 17.9732 14.5979 17.0355 15.5355C16.7657 15.8054 16.469 16.0327 16.1551 16.2142C15.9655 16.3217 15.7661 16.4123 15.5603 16.4856C15.5198 16.5015 15.479 16.5165 15.4378 16.5307C15.2411 16.5989 15.0373 16.6505 14.8293 16.6845C14.5558 16.7284 14.2785 16.75 14 16.75C13.7215 16.75 13.4442 16.7284 13.1707 16.6845C12.9627 16.6505 12.7589 16.5989 12.5622 16.5307C12.521 16.5165 12.4802 16.5015 12.4397 16.4856C12.2339 16.4123 12.0345 16.3217 11.8449 16.2142C11.531 16.0327 11.2343 15.8054 10.9645 15.5355C10.0268 14.5979 9.5 13.3261 9.5 12C9.5 11.401 9.59732 10.8023 9.79289 10.2071L2.79289 3.20711C1.57394 1.98816 1.57394 0.0118446 2.79289 -1.20711C4.01184 -2.42606 5.98816 -2.42606 7.20711 -1.20711L14.2071 5.79289C14.8023 5.59732 15.401 5.5 16 5.5C16.2785 5.5 16.5558 5.52159 16.8293 5.56553C17.0373 5.59948 17.2411 5.65108 17.4378 5.71926C17.479 5.73351 17.5198 5.74849 17.5603 5.76436C17.7661 5.83772 17.9655 5.92834 18.1551 6.03585C18.469 6.21734 18.7657 6.44461 19.0355 6.71447C19.8211 7.5 20.2071 8.5 20.2071 9.5C20.2071 10.099 20.1098 10.6977 19.9142 11.2929L22.9142 14.2929C24.1332 15.5118 24.1332 17.4882 22.9142 18.7071C21.6953 19.9261 19.7189 19.9261 18.5 18.7071L16.7929 17L15.5 15.7071L14.5 14.7071L11.5 11.7071C11.3044 12.3023 11.2071 12.901 11.2071 13.5C11.2071 14.3739 11.55 15.2123 12.1929 15.8553C12.8357 16.4981 13.6742 16.841 14.5481 16.841C15.099 16.841 15.6501 16.7078 16.1445 16.4598C16.1857 16.4389 16.2274 16.417 16.2694 16.3939C17.2431 15.8748 18.5 14.952 18.5 13.5C18.5 12.901 18.4027 12.3023 18.2071 11.7071L19.9142 13.4142L21.5 15L21.9142 15.4142C22.5789 16.079 22.6582 17.1332 22.1213 17.8787L18.1213 21.8787C17.5211 22.4789 16.4645 22.4789 15.8642 21.8787L7.8642 13.8787C7.2639 13.2784 7.2639 12.2218 7.8642 11.6216L11.8642 7.62156C12.6097 7.08468 13.6639 7.16397 14.3287 7.82868L15.7929 9.29289L16.7929 10.2929L17.7929 11.2929L18.7929 12.2929L19.7929 13.2929L20.5 14L21.5 15" fill="currentColor"/>
      </svg>
    ),
    bgColor: "bg-justfix-yellow/90",
    price: "From $89",
  },
  {
    name: "Door & Window Fixes",
    desc: "Repairs, adjustments & weather-stripping",
    icon: (
      <svg className="w-12 h-12 text-justfix-blue" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4 3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3ZM6 4V20H18V4H6Z" fill="currentColor"/>
        <path d="M9 12C9 11.4477 9.44772 11 10 11H14C14.5523 11 15 11.4477 15 12V20H9V12Z" fill="currentColor"/>
        <path d="M15 8C15 8.55228 14.5523 9 14 9C13.4477 9 13 8.55228 13 8C13 7.44772 13.4477 7 14 7C14.5523 7 15 7.44772 15 8Z" fill="currentColor"/>
      </svg>
    ),
    bgColor: "bg-justfix-blue/90",
    price: "From $79",
  },
  {
    name: "Emergency Repairs",
    desc: "24/7 service for urgent issues",
    icon: (
      <svg className="w-12 h-12 text-justfix-blue" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9 2C7.34315 2 6 3.34315 6 5V6H5C3.34315 6 2 7.34315 2 9V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V9C22 7.34315 20.6569 6 19 6H18V5C18 3.34315 16.6569 2 15 2H9ZM16 6V5C16 4.44772 15.5523 4 15 4H9C8.44772 4 8 4.44772 8 5V6H16ZM13 10H11V16H13V10Z" fill="currentColor"/>
        <path d="M11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18Z" fill="currentColor"/>
      </svg>
    ),
    bgColor: "bg-justfix-orange/90",
    price: "From $149",
  },
];

export function ServicesSection() {
  return (
    <>
      <h2 className="text-3xl font-bangers text-center mb-4 text-justfix-blue">Our Most Requested Services</h2>
      <p className="text-center text-gray-700 mb-10 font-comic max-w-2xl mx-auto">Fast, professional solutions for all your home repair needs. Flat-rate pricing with no surprises!</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className={`p-0 flex flex-col items-center ${service.bgColor} aspect-square relative`}>
              <div className="absolute top-2 right-2 bg-white text-justfix-blue text-xs font-bold py-1 px-2 rounded-md shadow-sm">
                {service.price}
              </div>
              <div className="flex items-center justify-center h-full w-full p-6">
                {service.icon}
              </div>
              <div className="absolute bottom-0 w-full bg-white py-3 px-2">
                <p className="font-marker text-center text-md font-semibold text-justfix-blue">{service.name}</p>
                <p className="text-xs font-comic text-center text-gray-600 mt-1">{service.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-justfix-blue hover:bg-justfix-blue/90 text-white font-marker py-3 px-8 rounded-md transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
          VIEW ALL SERVICES
        </button>
      </div>
    </>
  );
} 