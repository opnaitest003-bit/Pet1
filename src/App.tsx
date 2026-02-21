import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Stethoscope, 
  Calendar, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  Menu, 
  X,
  Shield,
  Award,
  Users,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
            <Heart size={24} fill="currentColor" />
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-slate-900">VetCare<span className="text-emerald-600">.</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-emerald-100">
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-emerald-600 text-white w-full py-4 rounded-xl font-bold">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 -z-10 rounded-l-[100px] hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
            <Award size={14} />
            Voted #1 Clinic in the City
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
            Compassionate care for your <span className="text-emerald-600 italic">best friends.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            We combine cutting-edge veterinary technology with a gentle, personalized touch to ensure your pets live their happiest, healthiest lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-emerald-200 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 group">
              Book Appointment
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <Phone size={20} className="text-emerald-600" />
              (555) 123-4567
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/pet${i}/100/100`} 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  alt="Happy client"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-amber-400 mb-0.5">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-500 font-medium">Trusted by 2,000+ local pet owners</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/vet-hero/800/1000" 
              alt="Veterinarian with a dog" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 hidden sm:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Emergency</p>
                <p className="text-lg font-bold text-slate-900">24/7 Available</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-50 -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "General Wellness",
      description: "Comprehensive checkups, vaccinations, and preventative care tailored to your pet's life stage.",
      icon: <Heart className="text-emerald-600" size={32} />,
      color: "bg-emerald-50"
    },
    {
      title: "Advanced Surgery",
      description: "State-of-the-art surgical suite for both routine procedures and complex specialized operations.",
      icon: <Stethoscope className="text-blue-600" size={32} />,
      color: "bg-blue-50"
    },
    {
      title: "Diagnostic Imaging",
      description: "On-site digital X-ray and ultrasound for fast, accurate diagnosis of internal health issues.",
      icon: <Shield className="text-purple-600" size={32} />,
      color: "bg-purple-50"
    },
    {
      title: "Dental Care",
      description: "Professional cleaning and oral surgery to keep your pet's smile healthy and breath fresh.",
      icon: <Award className="text-amber-600" size={32} />,
      color: "bg-amber-50"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">Comprehensive care for every need.</h3>
          <p className="text-slate-600">From routine checkups to emergency interventions, we provide a full spectrum of veterinary services under one roof.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[32px] border border-slate-100 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="text-emerald-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/seed/vet-1/400/500" 
                alt="Clinic" 
                className="rounded-3xl shadow-lg mt-12"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://picsum.photos/seed/vet-2/400/500" 
                alt="Vet care" 
                className="rounded-3xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-8 rounded-3xl shadow-2xl max-w-[240px]">
              <p className="text-4xl font-serif font-bold mb-1">15+</p>
              <p className="text-sm font-medium opacity-90">Years of excellence in veterinary medicine</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">About the Clinic</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">Where technology meets <span className="italic text-emerald-600">tenderness.</span></h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded in 2009, VetCare has grown from a small local practice into one of the region's most respected veterinary hospitals. Our mission remains the same: to treat every pet as if they were our own.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { title: "Expert Medical Team", desc: "Board-certified specialists and passionate caregivers." },
                { title: "Modern Facilities", desc: "Equipped with the latest medical and surgical technology." },
                { title: "Stress-Free Environment", desc: "Designed to keep pets calm and comfortable during visits." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <ChevronRight size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="text-slate-900 font-bold border-b-2 border-emerald-600 pb-1 hover:text-emerald-600 transition-colors">
              Meet Our Specialists
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      pet: "Owner of Max (Golden Retriever)",
      text: "The most caring team I've ever met. They saved Max after a difficult surgery and kept me updated every step of the way. Truly exceptional service.",
      rating: 5
    },
    {
      name: "David Chen",
      pet: "Owner of Luna (Siamese Cat)",
      text: "Luna is usually terrified of the vet, but the staff here was so gentle. The stress-free environment really makes a difference. Highly recommend!",
      rating: 5
    },
    {
      name: "Emma Wilson",
      pet: "Owner of Bella (Rabbit)",
      text: "Finding a vet who knows how to treat exotic pets is hard. The specialists here are incredibly knowledgeable and kind. Five stars!",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Client Stories</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900">What pet parents say about us.</h3>
          </div>
          <div className="flex gap-2">
            <div className="flex text-amber-400">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="font-bold text-slate-900">4.9/5 Average</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="p-10 rounded-[40px] bg-slate-50 relative">
              <div className="flex text-amber-400 mb-6">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${review.name}`} alt={review.name} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.pet}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto bg-slate-900 rounded-[60px] p-12 lg:p-24 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-8">Ready to give your pet the <br /> best care possible?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Join thousands of happy pet parents who trust VetCare for their furry family members. Schedule your first visit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-900/20">
              Book Appointment
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                <Heart size={18} fill="currentColor" />
              </div>
              <span className="text-xl font-serif font-bold text-slate-900">VetCare.</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Providing premium veterinary care with a focus on compassion, innovation, and excellence since 2009.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-100 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Meet the Team</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Pet Health Blog</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Pharmacy</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Emergency Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex gap-3">
                <MapPin size={18} className="text-emerald-600 flex-shrink-0" />
                <span>123 Pet Lane, Animal District<br />San Francisco, CA 94103</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-emerald-600 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-emerald-600 flex-shrink-0" />
                <span>Mon - Fri: 8:00 AM - 8:00 PM<br />Sat - Sun: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-6">Get pet care tips and clinic updates delivered to your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-slate-50 border border-slate-100 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
              <button className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400 font-medium uppercase tracking-widest">
          <p>© 2024 VetCare Modern Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
            <a href="#" className="hover:text-slate-600">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
