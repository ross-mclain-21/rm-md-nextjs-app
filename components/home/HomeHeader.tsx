import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faMinus } from '@fortawesome/free-solid-svg-icons';
import TypeWriter from '../common/TypeWriter';

function HomeHeader() {
  return (
    <div className="d-flex align-items-center justify-content-center mb-3">
      <FontAwesomeIcon icon={faChevronRight} className="header-chevron" />
      <TypeWriter message={'Ross McLain'} classes="header-text" typingSpeed={200} />
      <div className="position-relative">
        <div className="position-absolute terminal-line">
          <FontAwesomeIcon icon={faMinus} className="header-typewriter-dash blink" />
        </div>
      </div>

      <FontAwesomeIcon icon={faMinus} className="header-typewriter-dash opacity-0" />
    </div>
  );
}

export default HomeHeader;
