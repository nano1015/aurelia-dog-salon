import { Briefcase, ClipboardList, Syringe, TriangleAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SectionHeading } from '../layout/SectionHeading';

const items = [
  ['WHAT TO BRING', '首輪またはハーネス、\nリード、混合ワクチン証明書を\nご持参ください', Briefcase],
  ['VACCINATION', '混合ワクチン・狂犬病ワクチンを\n1年以内に接種していることが\n必要です', Syringe],
  ['PROCESS', 'カウンセリング後、施術内容や\nお預かり時間のご説明を\nいたします', ClipboardList],
  ['NOTES', '持病や性格、苦手なことなど\n事前にお知らせいただけると\n安心です', TriangleAlert],
];

export function ForFirstTime() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="first-time" className="border-b border-gold/35 bg-warm-white py-7 md:py-8">
      <div className="mx-auto max-w-[1620px] px-6">
        <SectionHeading title="FOR FIRST TIME" className="[&_h2]:text-[38px]" />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
          className="mt-6 grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {items.map(([title, body, Icon]) => (
            <motion.article
              key={title as string}
              variants={fadeUp}
              className="grid min-h-[168px] grid-cols-[92px_1fr] items-center rounded-md border border-gold/55 bg-warm-white px-7 shadow-[0_8px_22px_rgba(93,68,24,0.04)]"
            >
              <Icon className="h-16 w-16 text-gold" strokeWidth={1.55} />
              <div className="text-center">
                <h3 className="font-serif text-xl tracking-[0.15em] text-gold-dark">{title as string}</h3>
                <p className="mt-4 whitespace-pre-line text-[15px] leading-8 tracking-[0.06em] text-body-text">
                  {body as string}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
