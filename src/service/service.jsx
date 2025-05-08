import react from "react";
export default function Service(){

    const services=[
        "Web Application Development",
        "Landing Page Design & Development",
        "Bug Fixing & Debugging",
        
    ]

    return(

        <section id="service" className="bg-gray-800 text-white py-20 px-6">

            <div className="text-center mb-16">
                <h2 className="text-4xl text-white font-extrabold">Services That I Offer : </h2>

                <p className=" text-gray-400 mt-2 font-semibold">Here’s what I can help you with as a Software engineer</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 max-w-6xl mx-auto">
                
                {services.map((service,index)=>(
                    <div
                    key={index}
                    className="bg-gray-700 p-6 rounded-lg shadow hover:scale-105 transition-transform duration-300"
                  >
                    <h3 className="text-xl font-semibold text-green-400 mb-2">
                      {service}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {getServiceDescription(service)}
                    </p>
                  </div>
                ))}
            </div>
        </section>
    )
}

function getServiceDescription(service) {
    switch (service) {
      case "Web Application Development":
        return "Building dynamic, responsive web apps using React and Laravel.";
      case "Landing Page Design & Development":
        return "Creating fast, elegant landing pages that convert.";
      case "Bug Fixing & Debugging":
        return "Solving frontend/backend bugs quickly and efficiently.";
      
      default:
        return "";
    }
  }