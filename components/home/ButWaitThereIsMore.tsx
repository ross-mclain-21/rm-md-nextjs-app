import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import TypeWriter from '../common/TypeWriter';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { bounceTransition, serviceVariants } from '../common/CommonAnimations';
import { scrollTo } from '../common/CommonFunctions';
import GlobalContext from '../common/GlobalContext';

const ButWaitThereIsMore = () => {
  const { developRef } = useContext(GlobalContext);
  const controls = useAnimation();

  let scrollToElement = () => {
    scrollTo(developRef);
  };

  return (
    <div className="flex-fill d-flex flex-column justify-content-end">
      <motion.div
        animate={controls}
        initial="visible"
        variants={serviceVariants}
        className="d-flex flex-column align-items-center justify-content-center p-5"
      >
        <TypeWriter message={'MORE ABOUT ME:'} classes="small code" typingSpeed={50} />
        <button
          className="btn btn-link"
          onClick={() => {
            scrollToElement();
          }}
        >
          <motion.h1
            transition={bounceTransition}
            animate={{
              y: ['5px', '-5px']
            }}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </motion.h1>
        </button>
      </motion.div>
    </div>
  );
};

export default ButWaitThereIsMore;
