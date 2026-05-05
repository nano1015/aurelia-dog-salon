import { motion } from 'framer-motion';
import { menuData } from '../../data/menuData';
import { fadeUp, useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SectionHeading } from '../layout/SectionHeading';

export function MenuPrice() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="menu" className="border-b border-gold/35 bg-warm-white py-7 md:py-8">
      <div className="mx-auto max-w-[1620px] px-6">
        <SectionHeading title="MENU & PRICE" className="[&_h2]:text-[38px]" />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{ visible: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
          className="mt-6 grid overflow-hidden border border-gold/70 bg-warm-white md:grid-cols-2 xl:grid-cols-4"
        >
          {menuData.map((category) => (
            <motion.article key={category.titleEn} variants={fadeUp} className="border-gold/50 xl:border-l first:xl:border-l-0">
              <h3 className="border-b border-gold/55 py-4 text-center font-serif text-xl tracking-[0.18em] text-gold-dark">
                {category.titleEn}
              </h3>
              <div className="px-9 py-5">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-baseline justify-between gap-6 py-1.5 text-[15px] leading-7 tracking-[0.06em]">
                    <span>{item.name}</span>
                    <span className="shrink-0 font-serif text-[17px] tabular-nums">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
        <p className="mt-2 text-sm tracking-[0.06em] text-body-text">※表示価格はすべて税込です</p>
      </div>
    </section>
  );
}
