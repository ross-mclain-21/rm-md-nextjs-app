import React, { useContext, useEffect, useRef } from 'react';
import typeScriptLogo from '../../public/assets/images/Typescript_logo_2020.svg.png';
import nextJsLogo from '../../public/assets/images/800px-Nextjs-logo.svg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useAnimation } from 'framer-motion';
import { bounceTransition, serviceVariants } from '../common/CommonAnimations';
import { useInView } from 'react-intersection-observer';
import GlobalContext from '../common/GlobalContext';
import {
  faAws,
  faBootstrap,
  faCss3Alt,
  faGithub,
  faHtml5,
  faJsSquare,
  faMicrosoft,
  faNode,
  faReact,
  faSass,
  faUnity
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import TypeWriter from '../common/TypeWriter';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { scrollTo } from '../common/CommonFunctions';

export default function Create() {
  const { homeRef } = useContext(GlobalContext);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  let scrollToElement = () => {
    scrollTo(homeRef);
  };

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
          <span className={'code'}>I</span> <span>CREATE</span>
        </h1>
        <div className="d-flex flex-column flex-fill justify-content-center services-container p-5">
          <button
            className="btn btn-link mt-auto"
            onClick={() => {
              scrollToElement();
            }}>
            <h5 className="mb-0">BACK TO TOP</h5>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
