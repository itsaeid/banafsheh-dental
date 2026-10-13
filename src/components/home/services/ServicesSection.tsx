
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "./services";
import ServicesCard from "./ServicesCard";


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(
    null
  );

  // اگر هیچ کارتی هاور نشده باشد، کارت اول فعال است.
  const activeService = hoveredService ?? services[0].slug;

  return (
    <section
      id="services"
      dir="rtl"
      className="overflow-hidden bg-linear-to-b from-primary-100 to-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* عنوان سکشن */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
            خدمات دندان‌پزشکی
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            لبخندی زیبا، با تکیه بر{" "}
            <span className="text-primary-900">
              تخصص و دقت
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
            از درمان‌های ترمیمی تا خدمات زیبایی دندان، همراه شما
            هستیم تا با توجه به سلامت دهان و دندان و نیازهای
            فردی‌تان، مسیر مناسبی برای مراقبت از لبخند خود انتخاب کنید.
          </p>
        </motion.div>

        {/* گرید خدمات */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          onMouseLeave={() => setHoveredService(null)}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServicesCard
              key={service.slug}
              service={service}
              isActive={activeService === service.slug}
              onActivate={() => setHoveredService(service.slug)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
