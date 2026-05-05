import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { faqData } from '../../data/faqData';
import { SectionHeading } from '../layout/SectionHeading';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section id="faq" className="border-b border-gold/35 bg-warm-white py-8 md:py-9">
      <div className="mx-auto max-w-[1475px] px-6">
        <SectionHeading title="FAQ" className="[&_h2]:text-[54px]" />
        <div className="mt-7 space-y-3">
          {faqData.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.question} className="overflow-hidden rounded-md border border-gold/25 bg-warm-white shadow-[0_8px_18px_rgba(66,43,14,0.035)]">
                <button
                  type="button"
                  className="flex min-h-[56px] w-full items-center gap-7 px-10 text-left"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  aria-expanded={open}
                >
                  <span className="font-serif text-3xl text-gold-dark">Q.</span>
                  <span className="flex-1 text-xl tracking-[0.08em]">{item.question}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-2xl leading-none text-white">
                    {open ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-[104px] pb-6 text-[17px] leading-8 tracking-[0.08em] text-body-text">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
