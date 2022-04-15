import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faMinus } from '@fortawesome/free-solid-svg-icons';
import TypeWriter from '../common/TypeWriter';

function HomeHeader() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-end flex-fill">
      <div>
        <div className="">
          <TypeWriter message={'WHO AM I:'} classes="small code" typingSpeed={200} />
        </div>
        <div className="d-flex align-items-center mb-3">
          {/*<FontAwesomeIcon icon={faChevronRight} className="header-chevron" />*/}
          <TypeWriter message={'Ross McLain'} classes="header-text" typingSpeed={200} />
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
