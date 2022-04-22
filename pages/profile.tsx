import React from 'react';
import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired, getAccessToken } from '@auth0/nextjs-auth0';

import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';
import Highlight from '../components/common/Highlight';

function Profile() {
  const { user, isLoading } = useUser();

  return (
    <div className="container my-5">
      {isLoading && <Loading />}
      {user && (
        <>
          <Row className="align-items-center profile-header mb-5 text-center text-md-left" data-testid="profile">
            <Col md={2}>
              <img
                src={user.picture}
                alt="Profile"
                className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                data-testid="profile-picture"
              />
            </Col>
            <Col md>
              <h2 data-testid="profile-name">{user.name}</h2>
              <p className="lead text-muted" data-testid="profile-email">
                {user.email}
              </p>
            </Col>
          </Row>
          <Row data-testid="profile-json">
            <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
          </Row>
        </>
      )}
    </div>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
