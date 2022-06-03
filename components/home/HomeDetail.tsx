import React from 'react';

import HomeDetailListItem from './HomeDetailListItem';
import { faAt, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import TypeWriter from '../common/TypeWriter';
import PageLink from '../common/PageLink';

const HomeDetail = () => {
  return (
    <div className="my-3">
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-column align-items-center">
          <div className="">
            <TypeWriter message={'JOB TITLE:'} classes="small code" typingSpeed={50} />
          </div>
          <HomeDetailListItem faIcon={faBriefcase} text={'Senior Software Engineer'} faClasses="fa-1x" />
          <div className="ms-4 d-flex align-items-center">
            <HomeDetailListItem
              faIcon={faAt}
              text={'Blue Rabbit Veterinary'}
              faClasses="small"
              isLink={true}
              link="https://bluerabbit.vet/"
            />
          </div>
          <div className="mt-3">
            <TypeWriter message={'HOW TO CONTACT ME:'} classes="small code" typingSpeed={50} />
          </div>
          <HomeDetailListItem
            faIcon={faEnvelope}
            text={'mclain.development@gmail.com'}
            faClasses="fa-1x"
            isLink={true}
            link="mailto:mclain.development@gmail.com"
          />
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
        <PageLink href="/services" className="btn btn-code-green ff-press-start btn-sm mt-5 d-flex flex-column fw-bold">
          <span>Let me build</span> <span>your next website!</span>
        </PageLink>
      </div>
    </div>
  );
};

export default HomeDetail;
