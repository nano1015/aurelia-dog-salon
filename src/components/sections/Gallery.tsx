import { motion } from 'framer-motion';
import { scaleIn, useScrollAnimation } from '../../hooks/useScrollAnimation';
import { SectionHeading } from '../layout/SectionHeading';

const baseUrl = import.meta.env.BASE_URL || '';
const groups = [
  [`${baseUrl}images/gallery/toy-poodle-before-clean.jpg`, `${baseUrl}images/gallery/toy-poodle-after-clean.jpg`, ['BEFORE', 'AFTER']],
  [`${baseUrl}images/gallery/brown-poodle-before-clean.jpg`, `${baseUrl}images/gallery/brown-poodle-after-clean.jpg`, ['BEFORE', 'AFTER']],
  [`${baseUrl}images/gallery/maltese-yorkie-before-clean.jpg`, `${baseUrl}images/gallery/maltese-yorkie-after-clean.jpg`, ['FINISHED CUT', 'FINISHED CUT']],
];

export function Gallery() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="gallery" className="border-b border-gold/35 bg-warm-white py-7 md:py-8">
      <div className="mx-auto max-w-[1688px] px-6">
        <SectionHeading title="GALLERY" className="[&_h2]:text-[38px]" />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
          className="mt-7 grid gap-12 lg:grid-cols-3"
        >
          {groups.map(([left, right, labels], groupIndex) => (
            <motion.div key={`${left}-${groupIndex}`} variants={scaleIn} className="grid aspect-[2/1] grid-cols-2 overflow-hidden border border-gold/70 bg-beige">
              {[left, right].map((image, index) => (
                <div key={`${image}-${index}`} className="relative overflow-hidden border-gold/60 first:border-r">
                  <img src={image as string} alt="" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                  <span className="absolute bottom-3 left-1/2 min-w-28 -translate-x-1/2 bg-gold px-5 py-2 text-center font-serif text-lg tracking-[0.1em] text-white">
                    {(labels as string[])[index]}
                  </span>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
