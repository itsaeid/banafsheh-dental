
"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { DentalService } from "./services";


type ServicesCardProps = {
  service: DentalService;
  isActive: boolean;
  onActivate: () => void;
};

export default function ServicesCard({
  service,
  isActive,
  onActivate,
}: ServicesCardProps) {
  const Icon = service.icon;

  return (
    <motion.article
      onMouseEnter={onActivate}
      onFocus={onActivate}
      variants={{
        hidden: { opacity: 0, y: 35 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
      whileHover={{ y: -5 }}
      className={`group relative isolate flex min-h-80 flex-col overflow-hidden rounded-[28px] p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-shadow duration-500 md:p-9 ${
        isActive
          ? "text-white shadow-xl"
          : "bg-white text-slate-900 hover:shadow-xl"
      }`}
    >
      {/* تصویر پس‌زمینه */}
      <div
        className={`absolute inset-0 -z-20 transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* گرادیانت */}
      <div
        className={`absolute inset-0 -z-10 transition-opacity duration-500 ${
          isActive
            ? "bg-linear-to-l from-primary-900/40 via-primary-900/80 to-primary-900 opacity-100"
            : "bg-linear-to-l from-primary-900/40 via-primary-900/80 to-primary-900 opacity-0"
        }`}
      />

      {/* آیکن */}
      <div
        className={`mb-7 flex size-17 shrink-0 items-center justify-center rounded-card shadow-sm transition-all duration-500 ${
          isActive
            ? "bg-white/95 text-primary-900"
            : `${service.color} group-hover:scale-105`
        }`}
      >
        <Icon size={28} strokeWidth={1.8} />
      </div>

      {/* عنوان */}
      <h3
        className={`text-xl font-bold transition-colors duration-300 md:text-2xl ${
          isActive ? "text-white" : "text-slate-900"
        }`}
      >
        {service.title}
      </h3>

      {/* توضیحات */}
      <p
        className={`mt-3 text-sm leading-7 transition-colors duration-300 md:text-base ${
          isActive ? "text-white/95" : "text-slate-500"
        }`}
      >
        {service.description}
      </p>

      {/* لینک جزئیات */}
      <a
        href={`/services/${service.slug}`}
        aria-label={`مشاهده جزئیات ${service.title}`}
        className={`mt-auto flex w-fit items-center gap-2 pt-7 text-sm font-semibold transition-all duration-300 hover:gap-3 md:text-base ${
          isActive ? "text-white" : service.linkColor
        }`}
      >
        مشاهده جزئیات
        <ArrowLeft size={18} />
      </a>
    </motion.article>
  );
}
