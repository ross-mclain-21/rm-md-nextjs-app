import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0';

import PageLink from '../common/PageLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="dark" dark className="bg-transparent py-3" expand="md">
        <Container>
          <NavbarBrand className="logo" />
          <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar data-testid="navbar-items">
              <PageLink href="/" className="btn btn-outline-code-green" testId="navbar-csr">
                Home
              </PageLink>
              {user && (
                <>
                  <PageLink href="/external" className="btn btn-outline-code-red mx-3" testId="navbar-csr">
                    External Api Test
                  </PageLink>
                </>
              )}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isLoading && !user && (
                <NavItem id="qsLoginBtn">
                  <a
                    href="/api/auth/login"
                    className="btn btn-outline-code-green"
                    tabIndex={0}
                    id="navbar-login-desktop">
                    Log In
                  </a>
                </NavItem>
              )}
              {user && (
                <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                      height="50"
                      data-testid="navbar-picture-desktop"
                    />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-dark">
                    <DropdownItem header data-testid="navbar-user-desktop">
                      {user.name}
                    </DropdownItem>
                    <DropdownItem className="dropdown-profile" tag="span">
                      <PageLink href="/profile" testId="navbar-profile-desktop">
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon icon={faUser} />
                          <span className="ms-2">Profile</span>
                        </div>
                      </PageLink>
                    </DropdownItem>
                    <DropdownItem id="qsLogoutBtn">
                      <a href="/api/auth/logout" id="navbar-logout-desktop">
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon icon={faPowerOff} />
                          <span className="ms-2">Log Out</span>
                        </div>
                      </a>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isLoading && !user && (
              <Nav className="d-md-none" navbar>
                <a href="/api/auth/login" className="btn btn-outline-code-green" tabIndex={0} id="navbar-login-mobile">
                  Log in
                </a>
              </Nav>
            )}
            {user && (
              <Nav
                id="nav-mobile"
                className="d-md-none justify-content-between"
                navbar
                data-testid="navbar-menu-mobile">
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                      height="50"
                      data-testid="navbar-picture-mobile"
                    />
                    <h6 className="d-inline-block" data-testid="navbar-user-mobile">
                      {user.name}
                    </h6>
                  </span>
                </NavItem>
                <NavItem>
                  <PageLink href="/profile" testId="navbar-profile-mobile" className="btn btn-outline-code-green mb-3">
                    Profile
                  </PageLink>
                </NavItem>
                <NavItem id="qsLogoutBtn">
                  <a href="/api/auth/logout" className="btn btn-link p-0" id="navbar-logout-mobile">
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faPowerOff} />
                      <span className="ms-2">Log Out</span>
                    </div>
                  </a>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
