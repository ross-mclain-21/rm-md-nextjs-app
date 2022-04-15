import React, { RefObject, useContext, useEffect, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useAnimation } from 'framer-motion';
import { serviceVariants } from '../common/CommonAnimations';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import GlobalContext from '../common/GlobalContext';
import PortfolioSkillNoClick from '../portfolio/PortfolioSkillINoClick';

export default function Develop() {
  const { setDevelopRef } = useContext(GlobalContext);

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const developRef = useRef();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  useEffect(() => {
    setDevelopRef(developRef);
  }, []);

  return (
    <div className={'vh-100 d-flex flex-column '}>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={serviceVariants}
        className="d-flex flex-column container flex-fill pt-5 develop-container">
        <h1 className={'me-3 mt-5'}>
          <span className={'code'}>I</span> <span>DEVELOP</span>
        </h1>
        <div ref={developRef} className="d-flex align-items-center justify-content-center flex-fill">
          <div className="d-flex align-items-center flex-wrap">
            <div className="d-flex flex-column align-items-center justify-content-between flex-fill" />
            <div className="coding-gif flex-fill" />
            <div className="d-flex flex-column align-items-center justify-content-between flex-fill" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
