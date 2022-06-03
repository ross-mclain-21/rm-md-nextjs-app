import { faGrinBeamSweat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageLink from '../components/common/PageLink';
import React from 'react';

const Custom404 = () => {
  return (
    <div className="flex-fill d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col-lg-6 d-lg-flex d-none d-flex flex-column align-items-center justify-content-center">
          <h1 className="four-oh-four-text fw-bold p-sm-3">404</h1>
          <PageLink href="/" className="btn btn-outline-code-red mx-3" testId="home-btn">
            Return Home!
          </PageLink>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h1 className="four-oh-four-text fw-bold d-lg-none d-block mb-sm-4">404</h1>

          <FontAwesomeIcon icon={faGrinBeamSweat} className="fa-8x mb-4" />
          <h1>OOPS!</h1>
          <p>We can't seem to find the page you're looking for.</p>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
