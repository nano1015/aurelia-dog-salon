import { Car, Clock, MapPin, TrainFront } from 'lucide-react';
import { motion } from 'framer-motion';
import { slideLeft, slideRight, useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SectionHeading } from '../layout/SectionHeading';

const accessItems = [
  [MapPin, '住所', '〒152-0035\n東京都目黒区自由が丘 2-15-10 1F'],
  [Clock, '営業時間', '10:00 - 19:00\n（最終受付 17:00）'],
  [Car, '駐車場', '店舗前に専用駐車場 2台あり\n（ご予約優先）'],
  [TrainFront, '最寄駅', '東急東横線・大井町線\n自由が丘駅 徒歩5分'],
];

export function Access() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="access" className="border-b border-gold/35 bg-warm-white py-8 md:py-9">
      <div className="mx-auto max-w-[1475px] px-6">
        <SectionHeading title="ACCESS" subtitle="アクセス" className="[&_h2]:text-[58px]" />
        <motion.div ref={ref} initial="hidden" animate={controls} className="mt-7 grid gap-12 lg:grid-cols-[1fr_0.98fr]">
          <motion.div variants={slideLeft} className="border border-gold/35 bg-white p-1 shadow-[0_8px_20px_rgba(66,43,14,0.05)]">
            <img src="/images/access/aurelia-access-map.jpg" alt="AURELIA DOG SALON周辺地図" className="h-[356px] w-full object-cover" />
          </motion.div>
          <motion.div variants={slideRight} className="grid gap-4">
            {accessItems.map(([Icon, label, value]) => (
              <article key={label as string} className="grid min-h-[88px] grid-cols-[92px_132px_1fr] items-center rounded-md border border-gold/25 bg-warm-white px-8 shadow-[0_8px_18px_rgba(66,43,14,0.035)] max-md:grid-cols-[72px_1fr] max-md:py-5">
                <Icon className="h-14 w-14 text-gold" strokeWidth={1.6} />
                <h3 className="text-2xl tracking-[0.12em]">{label as string}</h3>
                <p className="whitespace-pre-line text-[19px] leading-8 tracking-[0.06em] max-md:col-span-2">{value as string}</p>
              </article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
