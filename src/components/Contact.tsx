import { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000); // hide success message after 5 seconds
    }
  };

  return (
    <section className="py-24 bg-primary pt-32">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed">
              Ready to start your fitness journey or have a question about our facilities? We'd love to hear from you. Our team typically responds within 24 hours.
            </p>

            <div className="flex flex-col gap-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Visit Us</h3>
                  <p className="text-gray-400">
                    123 Iron Street, Muscle District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-400">hello@fitnesscenter.com</p>
                </div>
              </div>
            </div>

            {isSubmitted && (
              <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-lg p-4 flex gap-3 text-emerald-400 max-w-lg animate-fade-in">
                <CheckCircle className="shrink-0 mt-0.5" size={20} />
                <p className="font-medium text-sm">Your message has been sent successfully. We'll get back to you soon!</p>
              </div>
            )}
          </div>

          <div className="bg-secondary p-8 md:p-10 rounded-2xl border border-white/5 h-fit shadow-soft">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Full Name
                </label>
                <input 
                  type="text"
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full bg-primary border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Email Address
                </label>
                <input 
                  type="email"
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-primary border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Your Message
                </label>
                <textarea 
                  placeholder="How can we help you achieve your goals?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className={`w-full bg-primary border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors resize-none mb-2`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-0">{errors.message}</p>}
              </div>

              <button 
                type="submit"
                className="w-full bg-accent text-primary font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 active:scale-[0.98] mt-2 flex items-center justify-center gap-2 tracking-wide"
              >
                SUBMIT MESSAGE &rsaquo;
              </button>
            </form>
          </div>
        </div>
        
        <div className="w-full h-[400px] rounded-2xl overflow-hidden grayscale opacity-80 border border-white/5 relative bg-secondary">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
            alt="Location Map" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
