import { useInView } from 'react-intersection-observer';
import { useAnimation, type Variants } from 'framer-motion';
import { useEffect } from 'react';

export const fadeUp: Variants = {
  hidden: { opacity: 1, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export const slideLeft: Variants = {
  hidden: { opacity: 1, x: -28 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight: Variants = {
  hidden: { opacity: 1, x: 28 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 1, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
};
