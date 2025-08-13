import React from "react";
import ServiceItem from "./ServiceItem";

export default function ServiceCategory({ heading, description, services }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {heading && <h2 className="text-3xl font-bold mb-4">{heading}</h2>}
        {description && (
          <p className="text-lg text-gray-600 mb-12">{description}</p>
        )}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceItem key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
// export default function ServiceCategory({ heading, description, services }) {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {heading && <h2 className="text-3xl font-bold mb-4">{heading}</h2>}
//         {description && (
//           <p className="text-lg text-gray-600 mb-12">{description}</p>
//         )}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, idx) => (
//             <div key={idx} className="relative overflow-hidden rounded-lg shadow-lg">
//               {/* Background video */}
//               {service.videoSrc && (
//                 <video
//                   className="absolute inset-0 w-full h-full object-cover"
//                   src={service.videoSrc}
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                 />
//               )}

//               {/* Overlay for readability */}
//               <div className="absolute inset-0"></div>

//               {/* Foreground content */}
//               <div className="relative p-6 z-10 text-gray-700">
//                 {service.title && (
//                   <h3 className="text-xl font-semibold mb-2">
//                     {service.title}
//                   </h3>
//                 )}
//                 {service.description && (
//                   <p className="text-sm">{service.description}</p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
