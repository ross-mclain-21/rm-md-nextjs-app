import React, { MutableRefObject, useCallback, useContext, useEffect, useRef, useState } from 'react';
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
import GlobalContext from '../common/GlobalContext';

const NavBar = ({ appRef }: { appRef: MutableRefObject<HTMLInputElement> }) => {
  const { hasScrolled, setHasScrolled } = useContext(GlobalContext);

  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  // The scroll listener
  const handleScroll = useCallback(e => {
    const currentScrollY = e.target.scrollTop;
    if (currentScrollY > 100) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }, []);

  // Attach the scroll listener to the div
  useEffect(() => {
    const div = appRef.current;
    div.addEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar className={`p-0 ${hasScrolled ? 'has-scrolled' : ''}`} expand="md" fixed="top">
        <Container className="px-0">
          <NavbarBrand className="logo me-0" />
          <NavbarToggler onClick={toggle} className="my-3" data-testid="navbar-toggle" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto pt-3" navbar data-testid="navbar-items">
              <PageLink href="/" className="mb-3 me-md-4" testId="navbar-home">
                Home
              </PageLink>
              <PageLink href="/portfolio" className="mb-3 me-md-4" testId="navbar-portfolio">
                Portfolio
              </PageLink>
              <PageLink href="/services" className="mb-3 me-md-4" testId="navbar-services">
                Services
              </PageLink>
              <PageLink href="/resume" className="mb-3 me-md-4" testId="navbar-resume">
                Resume
              </PageLink>
              {user && (user['https://api.mclaindevelopment.com/roles'] as string[]).includes('Owner') ? (
                <>
                  <PageLink href="/external" className="mb-3 me-md-4 code" testId="navbar-csr">
                    External Api Test
                  </PageLink>
                </>
              ) : (
                <></>
              )}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isLoading && !user && (
                <NavItem id="qsLoginBtn">
                  <a href="/api/auth/login" className="" tabIndex={0} id="navbar-login-desktop">
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
                      className="nav-user-profile rounded-circle my-1"
                      width="40"
                      height="40"
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
              <Nav className="d-md-none  mb-md-0 mb-3" navbar>
                <a href="/api/auth/login" className="" tabIndex={0} id="navbar-login-mobile">
                  Log in
                </a>
              </Nav>
            )}
            {user && (
              <Nav
                id="nav-mobile"
                className="d-md-none justify-content-between p-3 border-code-green border-radius-1 mt-3"
                navbar
                data-testid="navbar-menu-mobile">
                <NavItem>
                  <div className="d-flex align-items-center mb-2">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3 my-1"
                      width="40"
                      height="40"
                      data-testid="navbar-picture-mobile"
                    />
                    <h6 className="d-inline-block ms-2" data-testid="navbar-user-mobile">
                      {user.name}
                    </h6>
                  </div>
                </NavItem>
                <NavItem>
                  <PageLink href="/profile" className="mb-1" testId="navbar-profile-desktop">
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faUser} />
                      <span className="ms-2">Profile</span>
                    </div>
                  </PageLink>
                </NavItem>
                <NavItem id="qsLogoutBtn">
                  <a href="/api/auth/logout" className="" id="navbar-logout-mobile">
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
