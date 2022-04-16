import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { serviceVariants } from '../common/CommonAnimations';
import { useInView } from 'react-intersection-observer';

export default function Build() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className={'vh-100 d-flex flex-column '}>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={serviceVariants}
        className="d-flex flex-column container flex-fill pt-5 build-container">
        <h1 className={'me-3 mt-5'}>
          <span className={'code'}>I</span> <span>BUILD</span>
        </h1>
        <div className="d-flex flex-column flex-fill justify-content-center services-container"></div>
      </motion.div>
    </div>
  );
}
