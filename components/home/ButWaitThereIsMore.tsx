import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react';
import TypeWriter from '../common/TypeWriter';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { bounceTransition, serviceVariants } from '../common/CommonAnimations';
import { scrollTo } from '../common/CommonFunctions';
import GlobalContext from '../common/GlobalContext';

function ButWaitThereIsMore() {
  const { developRef, hasScrolled } = useContext(GlobalContext);
  const controls = useAnimation();

  let scrollToElement = () => {
    scrollTo(developRef);
  };

  useEffect(() => {
    if (hasScrolled) {
      controls.start('hidden');
    } else {
      controls.start('visible');
    }
  }, [controls, hasScrolled]);

  return (
    <div className="flex-fill d-flex flex-column justify-content-end">
      <motion.div
        animate={controls}
        initial="visible"
        variants={serviceVariants}
        className="d-flex flex-column align-items-center justify-content-center p-5">
        <TypeWriter message={'WHAT I DO:'} classes="small code" typingSpeed={200} />
        <button
          className="btn btn-link"
          onClick={() => {
            scrollToElement();
          }}>
          <motion.h1
            transition={bounceTransition}
            animate={{
              y: ['5px', '-5px']
            }}>
            <FontAwesomeIcon icon={faChevronDown} />
          </motion.h1>
        </button>
      </motion.div>
    </div>
  );
}

export default ButWaitThereIsMore;