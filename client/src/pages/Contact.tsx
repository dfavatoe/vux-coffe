import { useOpeningHours } from "@/hooks/use-opening-hours";
import { SectionHeader } from "@/components/SectionHeader";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const { data: hours } = useOpeningHours();

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Visit Us" 
          subtitle="We're located in the heart of Berlin-Neukölln."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Column */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1 stroke-1" />
                <div>
                  <h3 className="font-display text-xl font-bold uppercase mb-2">Address</h3>
                  <p className="font-serif text-neutral-600">
                    Wipperstrasse 14
                    <br />
                    12055 Berlin
                    <br />
                    Neukölln, Germany
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 mt-1 stroke-1" />
                <div>
                  <h3 className="font-display text-xl font-bold uppercase mb-2">Opening Hours</h3>
                  <div className="space-y-2 font-serif text-neutral-600">
                    {hours ? (
                      hours.map((h) => (
                        <div key={h.id} className="flex justify-between w-48 border-b border-neutral-100 pb-1">
                          <span>{h.day}</span>
                          <span>{h.hours}</span>
                        </div>
                      ))
                    ) : (
                      <p>Loading hours...</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 mt-1 stroke-1" />
                <div>
                  <h3 className="font-display text-xl font-bold uppercase mb-2">Contact</h3>
                  <p className="font-serif text-neutral-600">
                    <a href="mailto:hello@vuxcoffee.com" className="hover:text-black hover:underline decoration-1 underline-offset-4">hello@vuxcoffee.com</a>
                  </p>
                  <p className="font-serif text-neutral-600 mt-2">
                    <span className="text-sm text-neutral-400 block mb-1">PHONE</span>
                    +49 30 12345678
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-neutral-50 border border-neutral-200">
              <h4 className="font-display text-lg font-bold uppercase mb-4">Reservations</h4>
              <p className="font-serif text-neutral-600 text-sm mb-6">
                We accept reservations for groups of 6 or more. For smaller groups, just walk in.
              </p>
              <button className="w-full py-3 bg-black text-white font-display uppercase tracking-widest hover:bg-neutral-800 transition-colors">
                Book a Table
              </button>
            </div>
          </div>

          {/* Map Column - Placeholder for now */}
          <div className="h-[500px] w-full bg-neutral-100 border border-neutral-200 relative overflow-hidden grayscale">
             {/* Static map image placeholder since we don't have a real map key */}
             <div className="absolute inset-0 flex items-center justify-center bg-neutral-200">
               <span className="font-display uppercase tracking-widest text-neutral-500">Map Unavailable (Demo)</span>
             </div>
             {/* If we had an API key, we'd use Google Maps Embed here */}
             <iframe 
               width="100%" 
               height="100%" 
               style={{ border: 0, opacity: 0.6 }}
               loading="lazy" 
               allowFullScreen
               referrerPolicy="no-referrer-when-downgrade"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.5856468763266!2d13.444747776156545!3d52.4761401464878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fa734919077%3A0x6b8220025c83f253!2sWipperstra%C3%9Fe%2014%2C%2012055%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1715631221589!5m2!1sen!2sus"
             ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
