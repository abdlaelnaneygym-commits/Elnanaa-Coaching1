"use client";

import { Award, Dumbbell, MessagesSquare, Salad } from "lucide-react";
import Reveal from "./Reveal";

const CREDENTIALS = [
  {
    icon: Award,
    title: "معتمد من TASS",
    desc: "كورس TASS في التدريب الشخصي والتغذية الرياضية",
  },
  {
    icon: Dumbbell,
    title: "خبرة سنتين في التدريب",
    desc: "متابعة أونلاين لعملاء بمختلف المستويات والأهداف",
  },
  {
    icon: Salad,
    title: "أنظمة غذائية علمية",
    desc: "خطط مبنية على حسابات دقيقة وتقارير InBody وليس التخمين",
  },
  {
    icon: MessagesSquare,
    title: "متابعة يومية حقيقية",
    desc: "تواصل مباشر عبر واتساب لتعديل خطتك أولاً بأول",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 lg:py-36">
      <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 select-none text-[16rem] font-black leading-none text-outline-faint lg:text-[22rem]">
        كابتن
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* صورة الكابتن */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-gold-500/25 via-transparent to-gold-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <img
              src="/images/coach-about.jpg"
              alt="الكابتن عبد الله النعناع أثناء إعداد خطة تدريب"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coal-950/70 via-transparent to-transparent" />
            <div className="glass absolute bottom-5 right-5 left-5 flex items-center justify-between rounded-2xl px-6 py-4">
              <div>
                <div className="text-lg font-black text-gold-300">+50</div>
                <div className="text-xs font-semibold text-bone/60">قصة نجاح موثّقة</div>
              </div>
              <div className="h-10 w-px bg-white/15" />
              <div>
                <div className="text-lg font-black text-gold-300">TASS</div>
                <div className="text-xs font-semibold text-bone/60">كورس معتمد</div>
              </div>
              <div className="h-10 w-px bg-white/15" />
              <div>
                <div className="text-lg font-black text-gold-300">96%</div>
                <div className="text-xs font-semibold text-bone/60">التزام بالخطط</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* النص */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <div className="section-frame pt-5">
              <span className="text-xs font-black tracking-[0.35em] text-gold-400">
                01 — تعرّف على الكابتن
              </span>
            </div>
            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              الكابتن <span className="gold-gradient-text">عبد الله النعناع</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 text-base leading-9 text-bone/70 lg:text-lg">
              مدرب شخصي وأخصائي تغذية رياضية معتمد من TASS، ساعد أكثر من 50
              عميل على الوصول لأفضل نسخة من أجسامهم خلال سنتين من العمل
              والمتابعة. يؤمن &quot;النعناع&quot; أن التحول الحقيقي لا
              يأتي من تمارين عشوائية، بل من{" "}
              <span className="font-bold text-gold-300">
                علم، انضباط، ومتابعة لا تنقطع
              </span>{" "}
              — وهذا بالضبط ما ستحصل عليه داخل منصتنا.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {CREDENTIALS.map((item, i) => (
              <Reveal key={item.title} delay={0.1 + i * 0.08}>
                <div className="group h-full rounded-2xl border border-white/10 bg-coal-900/70 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-[0_20px_40px_-20px_rgba(217,164,65,0.35)]">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gold-500/15 text-gold-300 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-coal-950">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-sm font-extrabold">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-6 text-bone/55">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <blockquote className="mt-10 border-r-4 border-gold-500/70 pr-5 text-lg font-bold leading-9 text-bone/85">
              &quot;هدفي مش إنك تخس أو تكبر بسرعة… هدفي إنك تفضل قوي وثابت
              <span className="text-gold-300"> طول عمرك</span>.&quot;
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
