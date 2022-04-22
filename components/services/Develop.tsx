import React, { useContext, useEffect, useRef } from 'react';
import typeScriptLogo from '../../public/assets/images/Typescript_logo_2020.svg.png';
import nextJsLogo from '../../public/assets/images/800px-Nextjs-logo.svg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useAnimation } from 'framer-motion';
import { serviceVariants } from '../common/CommonAnimations';
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
    <div ref={developRef} className={'d-flex flex-column services-container'}>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={serviceVariants}
        className="d-flex flex-column container flex-fill pt-5 develop-container">
        <h1 className={'me-3 mt-5'}>
          <span className={'code'}>I</span> <span>DEVELOP</span>
        </h1>
        <div className="d-flex flex-column flex-fill justify-content-center service-activities-container">
          <div className="mb-5">
            <TypeWriter message={'SERVICES I OFFER:'} classes="small code" typingSpeed={200} />
            <div className="row mb-md-5 mt-3">
              <div className="col-lg-6">
                <button type="button" className="btn btn-code-green mb-3">
                  <h2>Web Design & Development</h2>
                </button>
              </div>

              <div className="col-lg-6">
                <button type="button" className="btn btn-code-green mb-3">
                  <h2>Support & Management</h2>
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-md-0 mb-3">
              <div className="row align-items-stretch justify-content-center mb-2">
                <div className="col-sm-3 col-6">
                  <div className="skill-icon">
                    <FontAwesomeIcon icon={faReact} />
                  </div>
                </div>
                <div className="col-sm-3 col-6 d-flex align-items-stretch">
                  <div className="skill-icon flex-fill">
                    <small>
                      NEXT<small>.js</small>
                    </small>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="skill-icon">
                    <FontAwesomeIcon icon={faHtml5} />
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="skill-icon">
                    <FontAwesomeIcon icon={faCss3Alt} />
                  </div>
                </div>
              </div>
              <div className="row align-items-stretch justify-content-center mb-2">
                <div className="col-sm-3 col-6">
                  <div className="skill-icon">
                    <FontAwesomeIcon icon={faJsSquare} />
                  </div>
                </div>
                <div className="col-sm-3 col-6 d-flex align-items-stretch">
                  <div className="skill-icon flex-fill">
                    <small>TS</small>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="skill-icon">
                    <FontAwesomeIcon icon={faSass} />
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="skill-icon">
                    <FontAwesomeIcon icon={faNode} />
                  </div>
                </div>
              </div>
              <div className="row align-items-stretch justify-content-center mb-2">
                <div className="col-sm-3 col-6 d-flex align-items-stretch">
                  <div className="skill-icon flex-fill">
                    <small>C#</small>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="skill-icon">
                    <FontAwesomeIcon icon={faMicrosoft} />
                  </div>
                </div>
                <div className="col-sm-3 col-6 d-flex align-items-stretch">
                  <div className="skill-icon flex-fill">
                    <small>.NET</small>
                  </div>
                </div>
                <div className="col-sm-3 col-6 d-flex align-items-stretch">
                  <div className="skill-icon flex-fill">
                    <small>SQL</small>
                  </div>
                </div>
              </div>
              <div className="row align-items-stretch justify-content-center mb-2">
                <div className="col-sm-3 col-6">
                  <div className="skill-icon">
                    <FontAwesomeIcon icon={faUnity} />
                  </div>
                </div>
                <div className="col-sm-3 col-6 d-flex align-items-stretch">
                  <div className="skill-icon flex-fill">
                    <FontAwesomeIcon icon={faBootstrap} />
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="skill-icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="skill-icon">
                    <FontAwesomeIcon icon={faAws} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div className="coding-gif" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
