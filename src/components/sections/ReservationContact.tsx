import { CalendarDays, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SectionHeading } from '../layout/SectionHeading';

const methods = [
  [MessageCircle, 'LINE予約', '24時間受付中', 'from-[#138d36] to-[#22ad48]'],
  [Phone, 'お電話', '03-5726-1234', 'from-[#b88427] to-[#d2aa54]'],
  [CalendarDays, 'Web予約', '24時間受付中', 'from-[#222222] to-[#3a3a3a]'],
];

export function ReservationContact() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="reservation" className="relative overflow-hidden bg-warm-white py-8 md:py-10">
      <div className="absolute -bottom-12 -left-10 h-64 w-64 rounded-full border border-gold/10" />
      <div className="absolute -right-10 top-8 h-64 w-64 rounded-full border border-gold/10" />
      <div className="mx-auto max-w-[1510px] px-6">
        <SectionHeading title="RESERVATION & CONTACT" subtitle="予約・お問い合わせ" className="[&_h2]:text-[58px]" />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{ visible: { transition: { staggerChildren: 0.12 } }, hidden: {} }}
          className="mt-8 grid gap-9 lg:grid-cols-3"
        >
          {methods.map(([Icon, title, note, gradient]) => (
            <motion.a
              key={title as string}
              href="#"
              variants={fadeUp}
              className={`group flex min-h-[122px] items-center justify-center gap-10 rounded-xl border border-white/80 bg-gradient-to-r ${gradient as string} px-10 text-white shadow-[inset_0_0_0_2px_rgba(255,255,255,0.18),0_10px_22px_rgba(66,43,14,0.16)] transition duration-300 hover:-translate-y-1`}
            >
              <Icon className="h-16 w-16" strokeWidth={1.6} />
              <span>
                <span className="block font-serif text-[34px] tracking-[0.08em]">{title as string}</span>
                <span className="mt-2 block text-center text-[17px] tracking-[0.18em]">{note as string}</span>
              </span>
              <span className="ml-auto text-5xl transition duration-300 group-hover:translate-x-1">›</span>
            </motion.a>
          ))}
        </motion.div>
        <p className="mt-11 text-center font-serif text-[42px] tracking-[0.12em] text-body-text">
          愛犬の特別な時間を、ご一緒に
        </p>
      </div>
    </section>
  );
}
