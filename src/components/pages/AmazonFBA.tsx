import { useState } from "react";
import { motion } from "motion/react";
import ScheduleMeetingForm from "../ScheduleMeetingForm";

export default function AmazonFBA() {
  const [showMeetingForm, setShowMeetingForm] = useState(false);

  const handleMeetingClick = () => {
    setShowMeetingForm(true);

    setTimeout(() => {
      document
        .getElementById("schedule-meeting-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="font-sans text-[#0c1a2e]">

      {/* HERO SECTION */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-32 px-6"
        style={{
          background: "linear-gradient(135deg, #0c1a2e 0%, #0ea5e9 100%)",
          borderBottomLeftRadius: "60px",
          borderBottomRightRadius: "60px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-8"
        >
          Amazon FBA Wholesale
        </motion.h1>

        <button
          onClick={handleMeetingClick}
          className="
            px-10
            py-4
            rounded-full
            bg-sky-500
            text-white
            text-lg
            font-semibold
            shadow-lg
            border-2
            border-white
            hover:bg-sky-600
            hover:scale-105
            transition-all
            duration-300
            cursor-pointer
          "
        >
          Schedule a Meeting
        </button>
      </section>

      {/* WHAT IS AMAZON FBA */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#0c1a2e]">
            What Is Amazon FBA?
          </h2>

          <p className="mb-4 leading-relaxed text-slate-600">
            FBA stands for "Fulfillment By Amazon". In FBA wholesale Business
            model we will research top selling items from different wholesale
            vendors or from Brands and then after the product meets research
            criteria we will simply order 50-1000 units and ship them to Amazon
            Warehouse.
          </p>

          <p className="mb-8 leading-relaxed text-slate-600">
            After Amazon receive our inventory then the product will go Live on
            our Amazon Seller Central and we will start getting orders and
            Amazon will ship those orders. After we see we are getting out of
            Inventory on Amazon then we will order more Inventory at wholesaler
            or Brand.
          </p>

          <button className="px-8 py-4 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-all cursor-pointer">
            Let's Start With Us
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600"
            alt="Amazon FBA"
            className="rounded-2xl shadow-xl w-full object-cover border-4 border-sky-100"
          />
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-sky-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600"
              alt="Warehouse"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#0c1a2e]">
              How Amazon FBA Wholesale Works?
            </h2>

            <p className="mb-4 leading-relaxed text-slate-600">
              Amazon FBA wholesale is one of the most secure long-term business
              models. It usually takes 30–90 days to find a profitable product
              and get approval from the brand.
            </p>

            <p className="mb-4 leading-relaxed text-slate-600">
              Multiple products and brands are researched because not every
              application gets approved. Initial investment usually ranges from
              $7000 to $15000.
            </p>

            <p className="leading-relaxed text-slate-600">
              Usually it takes around 3–5 months to generate good profits.
              Margins range from 15%–30%, while the first few months are mostly
              spent sourcing products and sending inventory to Amazon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#0c1a2e]">
            Requirements for FBA Wholesale
          </h2>

          <ol className="space-y-3 mb-8">
            {[
              "Company Name",
              "Address",
              "Phone Number",
              "EIN Number",
              "Seller Permit",
              "Reseller Certificate",
              "Website Domain",
              "Business Email",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-sky-500 text-white flex justify-center items-center text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-slate-600">{item}</span>
              </li>
            ))}
          </ol>

          <button className="px-10 py-4 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-all cursor-pointer">
            Get Started
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600"
            alt="Requirements"
            className="rounded-2xl shadow-xl w-full object-cover border-4 border-sky-100"
          />
        </motion.div>
      </section>

      {/* Schedule Meeting Form (Hidden until button click) */}
      {showMeetingForm && (
        <motion.section
          id="schedule-meeting-form"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto px-6 py-20"
        >
          <ScheduleMeetingForm />
        </motion.section>
      )}
    </div>
  );
}