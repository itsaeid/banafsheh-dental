
import {
  Activity,
  Smile,
  Sparkles,
  ScanFace,
  Scan,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export type DentalService = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  color: string;
  linkColor: string;
  slug: string;
}

export const services: DentalService[] = [
  {
    title: "کامپوزیت ونیر",
    description:
      "اصلاح رنگ، فرم و ظاهر دندان‌ها با کامپوزیت ونیر، متناسب با ویژگی‌های لبخند شما.",
    image: "/img/composite.jpg",
    icon: Smile,
    color: "bg-blue-100 text-blue-500",
    linkColor: "text-blue-600",
    slug: "composite-veneer",
  },
  {
    title: "لمینت سرامیکی",
    description:
      "بهبود ظاهر لبخند با لمینت‌های سرامیکی و توجه به تناسب، رنگ و فرم دندان‌ها.",
    image: "/img/laminate.jpg",
    icon: Sparkles,
    color: "bg-teal-100 text-teal-600",
    linkColor: "text-teal-600",
    slug: "ceramic-laminate",
  },
  {
    title: "طراحی لبخند",
    description:
      "بررسی تناسب دندان‌ها و لبخند برای انتخاب طرح درمان متناسب با چهره و خواسته‌های شما.",
    image: "/img/smile-design.jpg",
    icon: ScanFace,
    color: "bg-rose-100 text-rose-500",
    linkColor: "text-purple-600",
    slug: "smile-design",
  },
  {
    title: "درمان ریشه",
    description:
      "درمان ریشه و رسیدگی به دندان‌های آسیب‌دیده با هدف حفظ دندان طبیعی در صورت امکان.",
    image: "/img/root-canal.jpg",
    icon: Activity,
    color: "bg-rose-100 text-rose-500",
    linkColor: "text-rose-500",
    slug: "root-canal",
  },
  {
    title: "سفید کردن دندان",
    description:
      "کمک به روشن‌تر شدن رنگ دندان‌ها با روش بلیچینگ، متناسب با شرایط دندان و لثه.",
    image: "/img/bleaching.jpg",
    icon: Sparkles,
    color: "bg-amber-100 text-amber-600",
    linkColor: "text-orange-500",
    slug: "teeth-whitening",
  },
  {
    title: "ایمپلنت دندان",
    description:
      "جایگزینی دندان‌های ازدست‌رفته با ایمپلنت، بر اساس شرایط دهان و استخوان فک.",
    image: "/img/implant.jpg",
    icon: Scan,
    color: "bg-cyan-100 text-cyan-600",
    linkColor: "text-cyan-600",
    slug: "dental-implant",
  },
];