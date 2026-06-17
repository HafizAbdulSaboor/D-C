import { motion } from 'motion/react';
import { useState, forwardRef } from 'react';

const ScheduleMeetingForm = forwardRef<HTMLDivElement>((_props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    dateTime: '',
    service: 'Amazon FBA Wholesale',
    facebookId: '',
    instagramId: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: yahan apna backend/API/email service connect karei
    console.log('Form submitted:', formData);
    alert('Your request has been submitted!');
  };

  return (
    <section
      ref={ref}
      className="py-20 px-6"
      style={{ backgroundColor: '#f0f9ff' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto rounded-3xl shadow-xl p-10"
        style={{ backgroundColor: '#ffffff', border: '1px solid #bae6fd' }}
      >
       

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block font-semibold mb-2" style={{ color: '#0c1a2e' }}>
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg outline-none transition-colors"
              style={{ border: '1px solid #bae6fd', color: '#0c1a2e' }}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2" style={{ color: '#0c1a2e' }}>
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg outline-none transition-colors"
              style={{ border: '1px solid #bae6fd', color: '#0c1a2e' }}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2" style={{ color: '#0c1a2e' }}>
              Your Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full px-4 py-3 rounded-lg outline-none transition-colors"
              style={{ border: '1px solid #bae6fd', color: '#0c1a2e' }}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2" style={{ color: '#0c1a2e' }}>
              WhatsApp Number
            </label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="WhatsApp Number"
              className="w-full px-4 py-3 rounded-lg outline-none transition-colors"
              style={{ border: '1px solid #bae6fd', color: '#0c1a2e' }}
            />
          </div>

          <div>
            <label className="block font-semibold mb-2" style={{ color: '#0c1a2e' }}>
              Schedule a Call Date and Time
            </label>
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg outline-none transition-colors"
              style={{ border: '1px solid #bae6fd', color: '#0c1a2e' }}
            />
          </div>

          <div>
            <label className="block font-semibold mb-2" style={{ color: '#0c1a2e' }}>
              Choose any service of interest
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg outline-none transition-colors cursor-pointer"
              style={{ border: '1px solid #bae6fd', color: '#0c1a2e' }}
            >
              <option>Amazon FBA Wholesale</option>
              <option>Walmart Fulfillment Services</option>
              <option>eBay Automation</option>
              <option>Shopify Store</option>
              <option>Facebook Marketplace</option>
              <option>Mobile App Development</option>
              <option>Web Development</option>
              <option>Custom Software</option>
              <option>WordPress Development</option>
              <option>UI/UX Design</option>
              <option>Video Editing</option>
              <option>Graphic Design</option>
              <option>AWS Cloud Services</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2" style={{ color: '#0c1a2e' }}>
              Facebook ID
            </label>
            <input
              type="text"
              name="facebookId"
              value={formData.facebookId}
              onChange={handleChange}
              placeholder="Facebook ID"
              className="w-full px-4 py-3 rounded-lg outline-none transition-colors"
              style={{ border: '1px solid #bae6fd', color: '#0c1a2e' }}
            />
          </div>

          <div>
            <label className="block font-semibold mb-2" style={{ color: '#0c1a2e' }}>
              Instagram ID
            </label>
            <input
              type="text"
              name="instagramId"
              value={formData.instagramId}
              onChange={handleChange}
              placeholder="Instagram ID"
              className="w-full px-4 py-3 rounded-lg outline-none transition-colors"
              style={{ border: '1px solid #bae6fd', color: '#0c1a2e' }}
            />
          </div>

          <button
            type="submit"
            className="mt-2 px-10 py-4 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: '#0ea5e9' }}
          >
            Submit Request
          </button>
        </form>
      </motion.div>
    </section>
  );
});

ScheduleMeetingForm.displayName = 'ScheduleMeetingForm';

export default ScheduleMeetingForm;