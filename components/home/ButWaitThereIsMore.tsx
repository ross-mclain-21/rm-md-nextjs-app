import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import TypeWriter from '../common/TypeWriter';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { bounceTransition } from '../common/CommonAnimations';
import { scrollTo } from '../common/CommonFunctions';

function ButWaitThereIsMore() {
  return (
    <div className="flex-fill d-flex flex-column justify-content-end">
      <div className="d-flex flex-column align-items-center justify-content-center p-5">
        <TypeWriter message={'WHAT I DO:'} classes="small code" typingSpeed={200} />
        <a href="#" onClick={() => scrollTo(elementRef)}>
          <motion.h1
            transition={bounceTransition}
            animate={{
              y: ['5px', '-5px']
            }}>
            <FontAwesomeIcon icon={faChevronDown} />
          </motion.h1>
        </a>
      </div>
    </div>
  );
}

export default ButWaitThereIsMore;
