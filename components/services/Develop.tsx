import React, { RefObject, useContext, useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useAnimation } from 'framer-motion';
import { serviceVariants } from '../common/CommonAnimations';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import GlobalContext from '../common/GlobalContext';

export default function Develop() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const developRef = useRef();

  return (
    <div ref={developRef} className={'vh-100 d-flex flex-column container align-items-center justify-content-center'}>
      <motion.div ref={ref} animate={controls} initial="hidden" variants={serviceVariants} className="service">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className={'me-3'}>DEVELOP</h1>
          <FontAwesomeIcon icon={faDesktop} />
        </div>
      </motion.div>
    </div>
  );
}
