import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { serviceVariants } from '../components/common/CommonAnimations';
import TypeWriter from '../components/common/TypeWriter';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Services() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const [currentTitle, setCurrentTitle] = useState('BUILD');

  const [titleTypeWriter, setTitleTypeWriter] = useState(
    <TypeWriter message={'DEVELOP'} classes="" typingSpeed={400} />
  );
  useEffect(() => {
    swapTitles(currentTitle);
  }, [currentTitle]);

  const swapTitles = title => {
    setTimeout(() => {
      setTitleTypeWriter(<TypeWriter message={''} classes="" typingSpeed={400} />);
      setTitleTypeWriter(<TypeWriter message={title} classes="" typingSpeed={400} />);

      setCurrentTitle(
        title === 'DEVELOP' ? 'BUILD' : title === 'BUILD' ? 'CREATE' : title === 'CREATE' ? 'DEVELOP' : ''
      );
    }, 5000);
  };

  return (
    <div className={'d-flex flex-column services-container'}>
      <motion.div
        animate={controls}
        initial="hidden"
        variants={serviceVariants}
        className="d-flex flex-column container flex-fill pt-5 develop-container">
        <h1 className={'me-3 mt-5 mb-4 d-flex align-items-center'}>
          <span className={'code me-3'}>I</span> {titleTypeWriter}
        </h1>
        <div className="d-flex flex-column flex-fill justify-content-center service-activities-container">
          <div className="d-flex flex-column my-3">
            <div className="bg-code-green mb-3 p-3 flex-fill d-flex flex-column ">
              <h4 className="mb-3">Web Design & Development</h4>
              <p className="text-start ff-plex-mono fw-bold">
                I am now taking on development projects on a project by project basis! Please reach out via email if you
                have a web development project need, and I will review it and give an estimate of time and cost!
              </p>
            </div>
          </div>

          <TypeWriter message={'SERVICES I OFFER:'} classes="small code mb-2" typingSpeed={50} />
          <div className="row mb-3">
            <div className="col-lg-4 mb-3 d-flex flex-column">
              <div className="d-flex align-items-center justify-content-center p-3">
                <FontAwesomeIcon icon={faDollarSign} className="text-code fst-italic h1 mb-0" />
              </div>
              <div className="card bg-code-green d-flex flex-column flex-fill">
                <div className="card-title px-3 pt-3 pb-0 mb-0">
                  <p className="mb-0 fw-bold">Static Site</p>
                </div>
                <div className="card-body ff-plex-mono d-flex flex-column flex-fill">
                  <p>
                    If you are looking to promote your business, build some sort of portfolio, or simply make your mark
                    on the world wide web; I have you covered.
                  </p>
                  <p>
                    I will work with you iteratively to build a design that you are happy with for a one time fee, then
                    I will provide an estimate of time and cost.
                  </p>
                  <p>Once we come to an agreement, I will develop and deploy the application and do a handoff.</p>
                  <a
                    href="mailto:mclain.development@gmail.com?subject=Static Site Estimate Inquiry"
                    className="btn btn-code btn-sm ff-press-start mt-auto">
                    Get An Estimate!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3 d-flex flex-column">
              <div className="d-flex align-items-center justify-content-center p-3">
                <FontAwesomeIcon icon={faDollarSign} className="text-code fst-italic h1 mb-0" />
                <FontAwesomeIcon icon={faDollarSign} className="text-code fst-italic h1 mb-0" />
              </div>
              <div className="card bg-code-green d-flex flex-column flex-fill">
                <div className="card-title px-3 pt-3 pb-0 mb-0">
                  <p className="mb-0 fw-bold">Dynamic Site</p>
                </div>
                <div className="card-body ff-plex-mono d-flex flex-column flex-fill">
                  <p>
                    If you have a restaurant, blog, or any other type of website where you need to continually keep the
                    data up to date; This option is for you.
                  </p>
                  <p>
                    On top of the standard static site development I will configure and implement a Content Management
                    Software which you will be able to use to update the data on your website dynamically at your
                    convenience.
                  </p>
                  <p>
                    The teaching and understanding of the Content Management Software will be included in the handoff of
                    the website.
                  </p>
                  <a
                    href="mailto:mclain.development@gmail.com?subject=Dynamic Site Estimate Inquiry"
                    className="btn btn-code btn-sm ff-press-start mt-auto">
                    Get An Estimate!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3 d-flex flex-column">
              <div className="d-flex align-items-center justify-content-center p-3">
                <FontAwesomeIcon icon={faDollarSign} className="text-code fst-italic h1 mb-0" />
                <FontAwesomeIcon icon={faDollarSign} className="text-code fst-italic h1 mb-0" />
                <FontAwesomeIcon icon={faDollarSign} className="text-code fst-italic h1 mb-0" />
              </div>
              <div className="card bg-code-green d-flex flex-column flex-fill">
                <div className="card-title px-3 pt-3 pb-0 mb-0">
                  <p className="mb-0 fw-bold">Custom Site</p>
                </div>
                <div className="card-body ff-plex-mono d-flex flex-column flex-fill">
                  <p>
                    If you are looking to build a more complex application as a part of your business or personal
                    project, I am always open to designing and building something for you.
                  </p>
                  <p>Examples of a type of project that falls under this criteria:</p>
                  <ul>
                    <li>An inventory management system with database backend and integrated emailing.</li>
                    <li>
                      A time estimation tool, used to enter in the average time taken for different activities and add
                      it up to estimate a total job's time.
                    </li>
                    <li>Anything you can think of!</li>
                  </ul>
                  <a
                    href="mailto:mclain.development@gmail.com?subject=Custom Site Estimate Inquiry!"
                    className="btn btn-code btn-sm ff-press-start mt-auto">
                    Get An Estimate!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mt-3 mb-5">
            <div className="mb-3 flex-fill d-flex flex-column ">
              <p className="text-start ff-plex-mono fw-bold fst-italic">
                Regardless of project I also offer a monthly fee for active support with the quickest possible response
                time. If we do not have a monthly agreement then I charge hourly to fix, update, or in anyway change the
                website if needed. I do work full-time so I will do my best to get to any work ticket as soon as
                possible.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
