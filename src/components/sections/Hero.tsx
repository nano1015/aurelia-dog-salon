import { motion } from 'framer-motion';
const heroBg = '/images/hero-bg.webp';

export function Hero() {
  return (
    <section id="hero" className="relative h-[548px] overflow-hidden bg-warm-white md:h-[clamp(548px,30vw,620px)]">
      <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-warm-white via-warm-white/95 to-warm-white/45" />
      <div className="absolute inset-y-0 left-[38%] w-[12%] bg-gradient-to-r from-warm-white/55 to-transparent" />

      <motion.div
        className="relative z-10 flex h-full w-full items-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="ml-[8vw] mt-2 w-[min(45vw,560px)] text-center max-md:mx-auto max-md:w-[86vw]">
          <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-gold text-gold shadow-[0_0_0_8px_rgba(198,155,61,0.08)]">
            <span className="font-serif text-7xl leading-none">A</span>
          </div>
          <h1 className="font-serif text-[clamp(56px,5vw,90px)] font-normal leading-none tracking-[0.18em] text-[#3f3330] drop-shadow-sm">
            AURELIA
          </h1>
          <p className="mt-4 font-serif text-[clamp(25px,1.9vw,36px)] tracking-[0.34em] text-gold-dark">
            DOG SALON
          </p>
          <p className="mt-8 text-[clamp(18px,1.35vw,27px)] tracking-[0.18em] text-body-text">
            愛犬の美しさを極める、特別な時間
          </p>
          <a
            href="#reservation"
            className="btn-shimmer mx-auto mt-9 flex h-[58px] w-[315px] items-center justify-center rounded-full bg-gradient-to-r from-[#c09334] via-[#d4ae59] to-[#b98526] text-lg tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(134,91,21,0.22)] transition duration-300 hover:-translate-y-0.5"
          >
            ご予約はこちら
            <span className="ml-6 text-2xl leading-none">›</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
