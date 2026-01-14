export function Footer() {
  const STATIC_HOURS = [
    { day: "Wed - Fri", hours: "12:00 - 18:00" },
    { day: "Sat - Sun", hours: "11:00 - 18:00" },
    { day: "Mon - Tue", hours: "Closed" }
  ];

  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="text-4xl font-display font-bold uppercase tracking-tighter cursor-default">
            VUX Coffee
          </div>
          <p className="font-serif text-neutral-400 max-w-xs">
            Specialty Coffee. Steamed Bao Buns. All Vegan.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold border-b border-white/20 pb-2 mb-4 uppercase font-display">Location</h4>
          <p className="font-sans text-neutral-300">
            Wipperstrasse 14
            <br />
            12055 Berlin
            <br />
            Neukölln
          </p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block text-sm uppercase tracking-widest border-b border-white/50 hover:border-white transition-colors">
            Get Directions
          </a>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold border-b border-white/20 pb-2 mb-4 uppercase font-display">Hours</h4>
          <div className="space-y-2 font-sans text-neutral-300">
            {STATIC_HOURS.map((h, i) => (
              <div key={i} className="flex justify-between max-w-[200px]">
                <span>{h.day}</span>
                <span>{h.hours}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold border-b border-white/20 pb-2 mb-4 uppercase font-display">Connect</h4>
          <div className="flex flex-col space-y-2 font-sans">
            <a href="#" className="hover:text-neutral-300 transition-colors">Instagram</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Facebook</a>
            <a href="mailto:hello@vuxcoffee.com" className="hover:text-neutral-300 transition-colors">Email Us</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-neutral-500 text-sm">
        <p>© {new Date().getFullYear()} VUX COFFEE. Berlin.</p>
        <p>Imprint & Privacy Policy</p>
      </div>
    </footer>
  );
}
