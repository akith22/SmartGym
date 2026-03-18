import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
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
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <>
      <main className="flex-1 flex flex-col items-center py-[48px] px-[24px]">
        <div className="max-w-[960px] w-full grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
          {/* Left Side: Copy & Info */}
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[16px]">
              <h1 className="text-[36px] leading-[40px] md:text-[48px] md:leading-[1] font-black tracking-tight text-[#0f172a] dark:text-[#f1f5f9]">
                Get in <span className="text-[#d49e16] text-shadow-sm">Touch</span>
              </h1>
              <p className="text-[#475569] dark:text-[#94a3b8] text-[18px] leading-[28px] max-w-none">
                Ready to start your fitness journey or have a question about our facilities? We'd love to hear from you. Our team typically responds within 24 hours.
              </p>
            </div>
            <div className="space-y-[24px]">
              <div className="flex items-start gap-[16px]">
                <div className="bg-[#d49e16]/10 p-[12px] rounded-[8px] text-[#d49e16]">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] leading-[28px]">Visit Us</h3>
                  <p className="text-[#475569] dark:text-[#94a3b8]">123 Iron Street, Muscle District<br/>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-[16px]">
                <div className="bg-[#d49e16]/10 p-[12px] rounded-[8px] text-[#d49e16]">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] leading-[28px]">Call Us</h3>
                  <p className="text-[#475569] dark:text-[#94a3b8]">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-[16px]">
                <div className="bg-[#d49e16]/10 p-[12px] rounded-[8px] text-[#d49e16]">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] leading-[28px]">Email Us</h3>
                  <p className="text-[#475569] dark:text-[#94a3b8]">hello@fitnesscenter.com</p>
                </div>
              </div>
            </div>
            {/* Success Message Area */}
            {isSubmitted && (
              <div className="mt-[16px] p-[16px] rounded-[8px] bg-[#10b981]/10 border border-[#10b981]/20 flex items-center gap-[12px]">
                <span className="material-symbols-outlined text-[#10b981]">check_circle</span>
                <p className="text-[14px] leading-[20px] font-medium text-[#059669] dark:text-[#34d399]">Your message has been sent successfully. We'll get back to you soon!</p>
              </div>
            )}
          </div>
          {/* Right Side: Contact Form */}
          <div className="bg-[#f1f5f9] dark:bg-[#1e293b]/40 p-[32px] rounded-[12px] border border-[#cbd5e1] dark:border-[#334155]/50 shadow-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] leading-[20px] font-semibold uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8]" htmlFor="name">Full Name</label>
                <input 
                  className={`w-full rounded-[8px] border-2 ${errors.name ? 'border-[#ef4444]' : 'border-[#cbd5e1] dark:border-[#334155]'} bg-[#ffffff] dark:bg-[#0f172a] text-[#0f172a] dark:text-[#ffffff] focus:ring-2 focus:ring-[#d49e16] focus:border-[#d49e16] p-[16px]`} 
                  id="name" 
                  name="name" 
                  placeholder="e.g. Alex Johnson" 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData(s => ({ ...s, name: e.target.value }))}
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] leading-[20px] font-semibold uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8]" htmlFor="email">Email Address</label>
                <input 
                  className={`w-full rounded-[8px] border-2 ${errors.email ? 'border-[#ef4444]' : 'border-[#cbd5e1] dark:border-[#334155]'} bg-[#ffffff] dark:bg-[#0f172a] text-[#0f172a] dark:text-[#ffffff] focus:ring-2 focus:ring-[#d49e16] focus:border-[#d49e16] p-[16px]`} 
                  id="email" 
                  name="email" 
                  placeholder="alex@example.com" 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(s => ({ ...s, email: e.target.value }))}
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] leading-[20px] font-semibold uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8]" htmlFor="message">Your Message</label>
                <textarea 
                  className={`w-full rounded-[8px] border-2 ${errors.message ? 'border-[#ef4444]' : 'border-[#cbd5e1] dark:border-[#334155]'} bg-[#ffffff] dark:bg-[#0f172a] text-[#0f172a] dark:text-[#ffffff] focus:ring-2 focus:ring-[#d49e16] focus:border-[#d49e16] p-[16px] resize-none`} 
                  id="message" 
                  name="message" 
                  placeholder="How can we help you achieve your goals?" 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData(s => ({ ...s, message: e.target.value }))}
                ></textarea>
              </div>
              <button className="w-full bg-[#d49e16] hover:bg-[#d49e16]/90 text-[#211d11] font-extrabold py-[16px] px-[24px] rounded-[8px] transition-all flex items-center justify-center gap-[8px] shadow-lg shadow-[#d49e16]/20" type="submit">
                <span>SUBMIT MESSAGE</span>
                <span className="material-symbols-outlined text-[14px] leading-[20px]">send</span>
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="w-full px-[24px] py-[48px] max-w-[1200px] mx-auto">
        <div className="w-full h-[320px] rounded-[12px] overflow-hidden border-2 border-[#d49e16]/20 relative grayscale contrast-125 dark:invert dark:hue-rotate-180">
          <img className="w-full h-full object-cover" alt="Stylized urban map of New York City" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjz8N5BQyCs9eRA1JeAnSFyTjOUD0zHW8e27ISGuVN6qu4yu1ft3P1fePOtGRebFCXFzO-M7P4rfGE2s9RfMMeG1CTn4GRNwQlBzEW-9ics1D_xJwOQ44sC_x7VKwzptLF_j9jfgXk-NebZQ5XVrl3yAQ9LxyJtAl4G-l4guLwFOlpa5Y22AlZ26V-QMmpoxJZVMvPmOKviTcK525APvYjaMvCVN9aE_BRN7c5KV0arhZBMJXVLBV83B_IMzEDxIQOOdHsDzGG7W0"/>
          <div className="absolute inset-[0px] bg-[#d49e16]/10 pointer-events-none"></div>
        </div>
      </section>
    </>
  );
};

export default Contact;
