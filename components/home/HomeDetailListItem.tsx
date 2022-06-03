import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TypeWriter from '../common/TypeWriter';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface HomeDetailListItemInput {
  faIcon: IconDefinition;
  text: string;
  faClasses?: string;
  textClasses?: string;
  isLink?: boolean;
  link?: string;
}

const HomeDetailListItem = ({
  faIcon,
  text,
  faClasses = 'fa-2x',
  textClasses = '',
  isLink = false,
  link = ''
}: HomeDetailListItemInput) => {
  return (
    <>
      {!isLink ? (
        <div className="d-flex align-items-center my-2">
          <div className="me-2 d-flex">
            <FontAwesomeIcon icon={faIcon} className={faClasses} />
          </div>
          <TypeWriter message={text} typingSpeed={50} classes={textClasses} />
        </div>
      ) : (
        <a href={link} target="_blank" className="d-flex align-items-center my-2">
          <div className="me-2 d-flex">
            <FontAwesomeIcon icon={faIcon} className={faClasses} />
          </div>
          <TypeWriter message={text} typingSpeed={50} classes={textClasses} />
        </a>
      )}
    </>
  );
};

export default HomeDetailListItem;
