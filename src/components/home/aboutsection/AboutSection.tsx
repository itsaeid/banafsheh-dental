"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SecondaryButton from "../../ui/SecondaryButton";

export default function AboutSection() {
  return (
    <section className="items-center justify-center overflow-hidden bg-primary-50 py-20">
      <div className="mx-auto grid max-w-7xl items-center justify-between gap-12 px-6 md:grid-cols-2">
        {/* picture  */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[700px]"
        >
          <div className="relative aspect-[1.08/1] overflow-hidden rounded-2xl">
            <Image
              src="/img/about-pic.png"
              alt="About Us"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
        {/* text  */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="mb-3 flex items-center gap-4">
            <span className="mt-2 h-[2px] w-5 bg-primary-900" />
            <span className="text-sm font-medium tracking-[0.3em] text-primary-900">دکتر بنفشه یالودبردن</span>
          </div>
          <h2 className="max-w-2xl text-3xl leading-tight font-normal tracking-tight text-neutral-950 sm:text-4xl lg:text-[46px]">
            دندانپزشک زیبایی و درمانی
          </h2>
          <p className="mt-7 max-w-2xl text-base text-neutral-600 md:text-lg">
            در مطب دکتر بنفشه یالودبردن، سلامت دهان و دندان در کنار زیبایی لبخند قرار می‌گیرد. ما با ارائه خدمات دندان‌پزشکی عمومی، ترمیمی و زیبایی، تلاش می‌کنیم تجربه‌ای مطمئن و متناسب با نیازهای هر مراجعه‌کننده فراهم کنیم. از طراحی لبخند، کامپوزیت ونیر و لمینت سرامیکی تا درمان ریشه، بلیچینگ و سایر خدمات دندان‌پزشکی، رویکرد ما بر پایه دقت در درمان، توجه به جزئیات و انتخاب روش مناسب برای هر فرد است. هدف ما این است که در محیطی آرام و حرفه‌ای، با توجه به سلامت دندان‌ها و خواسته‌های شما، برای رسیدن به لبخندی سالم و زیبا همراهتان باشیم.
          </p>
          <SecondaryButton className="mt-8" text="رزرو نوبت" />
        </motion.div>
      </div>
    </section>
  );
}
