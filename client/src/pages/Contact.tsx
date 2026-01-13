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
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-neutral-50 border border-neutral-200">
              <h4 className="font-display text-lg font-bold uppercase mb-6">Follow Us</h4>
              <div className="flex space-x-6">
                <a href="https://instagram.com/vuxcoffee" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-neutral-600 hover:text-black transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16.36a4.362 4.362 0 110-8.724 4.362 4.362 0 010 8.724zm4.962-10.89a1.41 1.41 0 11-2.818 0 1.41 1.41 0 012.818 0z" clipRule="evenodd" /></svg>
                  <span className="font-display text-sm uppercase font-bold">Instagram</span>
                </a>
                <a href="https://facebook.com/vuxcoffee" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-neutral-600 hover:text-black transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  <span className="font-display text-sm uppercase font-bold">Facebook</span>
                </a>
              </div>
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
