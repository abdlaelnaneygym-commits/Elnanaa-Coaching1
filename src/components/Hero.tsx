"use client";

import { HERO_STORAGE_KEY, HERO_UPDATED_EVENT } from "@/lib/image";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, Flame, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

const DEFAULT_HERO = "/images/hero-coach.jpg";

const STATS = [
  { value: "+50", label: "عميل حققوا نتائج" },
  { value: "2", label: "سنة خبرة" },
  { value: "96%", label: "نسبة نجاح الخطط" },
  { value: "24/7", label: "متابعة مستمرة" },
];

export default function Hero() {
  const [heroImage, setHeroImage] = useState(DEFAULT_HERO);

  useEffect(() => {
    const read = () => {
      const saved = window.localStorage.getItem(HERO_STORAGE_KEY);
      setHeroImage(saved || DEFAULT_HERO);
    };
    read();
    window.addEventListener("storage", read);
    window.addEventListener(HERO_UPDATED_EVENT, read);
    return () => {
      window.removeEventListener("storage", read);
      window.removeEventListener(HERO_UPDATED_EVENT, read);
    };
  }, []);

  return (
    <section id="home" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* صورة الكابتن — عرض طبيعي كامل بدون تشويه */}
      <div className="absolute inset-0">
        <motion.img
          key={heroImage.slice(0, 64)}
          src={heroImage}
          alt="الكابتن عبد الله النعناع — Elnanaa Coaching"
          className="h-full w-full object-cover object-center"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        {/*
          طبقات تعتيم خفيفة:
          1) أساس خفيف جداً (bg-black/30) لقراءة النصوص على الشاشات الصغيرة فقط
          2) تدرج أفقي مركّز خلف النصوص جهة اليمين، ويتلاشى تماماً (شفاف 100%)
             في آخر 30% من الجهة المقابلة لتبقى صورة الكابتن ساطعة بألوانها الطبيعية
          3) تدرج رأسي خفيف لثبات الهيدر وللانتقال الناعم للقسم التالي
        */}
        <div className="absolute inset-0 bg-black/30 lg:bg-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(0,0,0,0.80)_0%,rgba(0,0,0,0.55)_32%,rgba(0,0,0,0.20)_58%,rgba(0,0,0,0)_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-coal-950/80 via-transparent to-black/35" />
      </div>

      {/* اسم البراند الإنجليزي المفرّغ في الخلفية */}
      <div className="pointer-events-none absolute -bottom-6 left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap text-[19vw] font-black leading-none tracking-tight text-outline-faint">
        ELNANAA
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-32 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 inline-flex w-fit items-center gap-2.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-5 py-2 text-xs font-bold text-gold-300 backdrop-blur-sm"
        >
          <ShieldCheck size={15} />
          مدرب شخصي معتمد من TASS — متابعة أونلاين يومية
        </motion.div>

        <h1 className="text-shadow-soft max-w-4xl text-5xl font-black leading-[1.12] sm:text-6xl lg:text-[5.2rem]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            حوّل جسمك.
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            اصنع{" "}
            <span className="gold-gradient-text drop-shadow-[0_0_35px_rgba(217,164,65,0.35)]">
              نسختك الأقوى
            </span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="text-shadow-soft mt-7 max-w-xl text-base leading-8 text-bone/85 sm:text-lg"
        >
          مع الكابتن{" "}
          <span className="font-extrabold text-bone">عبد الله النعناع</span> — أنظمة
          تدريب وتغذية مصممة خصيصاً لجسمك وهدفك، مع متابعة يومية حقيقية تضمن وصولك
          لأفضل نتيجة في أسرع وقت ممكن.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#register"
            className="btn-shine group inline-flex items-center gap-3 rounded-full bg-gradient-to-l from-gold-300 via-gold-400 to-gold-600 px-8 py-4 text-base font-black text-coal-950 shadow-[0_18px_45px_-12px_rgba(217,164,65,0.75)] transition-transform duration-300 hover:scale-[1.04] active:scale-95"
          >
            <Flame size={19} />
            احجز باقتك الآن
            <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1.5" />
          </a>
          <a
            href="#transformations"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-bone backdrop-blur-md transition-all duration-300 hover:border-gold-400/60 hover:bg-gold-500/10 hover:text-gold-200"
          >
            شاهد تحوّلات عملائنا
          </a>
        </motion.div>

        {/* شريط الإحصائيات */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-coal-950/70 px-5 py-6 text-center">
              <div className="text-3xl font-black text-gold-300">{stat.value}</div>
              <div className="mt-1.5 text-[11px] font-semibold tracking-wide text-bone/55">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="اسحب للأسفل"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone/50 transition-colors hover:text-gold-300 md:flex"
      >
        <span className="text-[10px] font-bold tracking-[0.35em]">اسحب للأسفل</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
