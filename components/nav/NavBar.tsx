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
import { useRouter } from 'next/router';

const NavBar = ({ appRef }: { appRef: MutableRefObject<HTMLInputElement> }) => {
  const { hasScrolled, setHasScrolled } = useContext(GlobalContext);
  const router = useRouter();

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
          <NavbarBrand href="/" className="logo me-0" />
          <NavbarToggler onClick={toggle} className="my-3" data-testid="navbar-toggle" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto pt-3" navbar data-testid="navbar-items">
              <PageLink
                href="/"
                className={`mb-3 me-md-4 ${router.pathname == '/' ? 'selected-pagelink' : ''}`}
                testId="navbar-home">
                Home
              </PageLink>
              <PageLink
                href="/services"
                className={`mb-3 me-md-4 ${router.pathname == '/services' ? 'selected-pagelink' : ''}`}
                testId="navbar-services">
                Services
              </PageLink>
              <PageLink
                href="/portfolio"
                className={`mb-3 me-md-4 ${router.pathname == '/portfolio' ? 'selected-pagelink' : ''}`}
                testId="navbar-portfolio">
                Portfolio
              </PageLink>
              <PageLink
                href="/resume"
                className={`mb-3 me-md-4 ${router.pathname == '/resume' ? 'selected-pagelink' : ''}`}
                testId="navbar-resume">
                Resume
              </PageLink>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
