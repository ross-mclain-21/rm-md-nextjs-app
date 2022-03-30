import React from 'react';

import HomeDetailListItem from './HomeDetailListItem';
import { faAt, faBriefcase, faEnvelope, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

function HomeDetail() {
  return (
    <div className="row my-3">
      <div className="col-md-6 d-flex flex-column align-items-center">
        <div className="d-flex flex-column align-items-md-start align-items-center">
          <HomeDetailListItem faIcon={faBriefcase} text={'Senior DevOps Engineer'} faClasses="fa-1x" />
          <div className="ms-4">
            <HomeDetailListItem
              faIcon={faAt}
              text={'Tyler Technologies'}
              faClasses="small"
              isLink={true}
              link="https://www.tylertech.com/"
            />
          </div>

          <HomeDetailListItem
            faIcon={faEnvelope}
            text={'mclain.development@gmail.com'}
            faClasses="fa-1x"
            isLink={true}
            link="mailto:mclain.development@gmail.com"
          />

          <HomeDetailListItem faIcon={faHashtag} text={'1 (207) 420-6255'} faClasses="fa-1x" />

          <HomeDetailListItem
            faIcon={faGithub}
            text={'ross-mclain-21'}
            faClasses="fa-1x"
            isLink={true}
            link="https://github.com/ross-mclain-21/ross-mclain-21"
          />
          <HomeDetailListItem
            faIcon={faLinkedin}
            text={'rossmclain21'}
            faClasses="fa-1x"
            isLink={true}
            link="https://www.linkedin.com/in/rossmclain21"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="col-md-6 d-flex flex-column align-items-center pt-md-2 pt-4">
        <div className="d-flex flex-column">
          <Link href={'/portfolio'}>
            <span className="btn btn-outline-code-green home-detail-btn mb-3">Portfolio</span>
          </Link>
          <Link href={'/resume'}>
            <span className="btn btn-outline-code-green home-detail-btn mb-3">Resume</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default HomeDetail;
