import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
export const Contact = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [isSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent, type: 'Message' | 'Consultancy') => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) return;

    const phoneNumber = "9350679799"; // TODO: Replace with user's phone number
    const text = `*New ${type} from Portfolio*%0A%0A` +
      `*Name:* ${formData.firstName} ${formData.lastName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');

    setSuccess(true);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 bg-black border-t border-white/5">
      <div className="section-container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-sm text-green-400 font-semibold tracking-widest uppercase mb-3">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h3>
          <p className="text-gray-400 text-lg">Ready to start your next project or need a consultancy call? Send a message.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <a href="mailto:karunsingh5228@gmail.com" className="block glass-card p-8 group hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-lg group-hover:shadow-blue-500/50">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-200">Email</h4>
                  <p className="text-gray-400 group-hover:text-blue-400 transition-colors">karunsingh5228@gmail.com</p>
                </div>
              </div>
            </a>

            <a href="https://wa.me/9350679799" target="_blank" rel="noopener noreferrer" className="block glass-card p-8 group hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all shadow-lg group-hover:shadow-green-500/50">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-200">WhatsApp</h4>
                  <p className="text-gray-400 group-hover:text-green-400 transition-colors">+91 9350679799</p>
                </div>
              </div>
            </a>

            <div className="glass-card p-8 group">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all shadow-lg group-hover:shadow-pink-500/50">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-200">Location</h4>
                  <p className="text-gray-400">Samalkha, Panipat, Haryana INDIA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">First Name</label>
                  <input required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Last Name</label>
                  <input value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Email Address</label>
                <input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button onClick={(e) => handleSubmit(e, 'Message')} disabled={isSubmitting} className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white py-4 rounded-xl font-medium transition-colors flex justify-center items-center gap-2">
                  Send Message
                  <Mail className="w-5 h-5" />
                </button>
              </div>
              {success && <p className="text-green-400 text-sm mt-2 text-center">Your request has been sent successfully!</p>}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
