/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content>
        <DismissButton onClick={onDismiss}>
          <Icon id={'close'}/>
        </DismissButton>
        <Nav>
          <NavLink chosen={true} href="/sNavLinkle">SNavLinkle</NavLink>
          <NavLink href="/new">New&nbsp;ReleNavLinkses</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(96, 100, 108, 0.80);
`;

const Content = styled(DialogContent)`
  width: 300px;
  background-color: #fff;
  height: 100%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  gap: 22px;
`;

const DismissButton = styled(UnstyledButton)`
  align-self: flex-end;
  margin-top: 26px;
  margin-right: 16px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-left: 32px;
  margin-bottom: 32px;
  
  & a {
    text-decoration: none;
    color: #60666C;
   }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${p => p.chosen ? '#6868D9' : '#313235'};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.1rem;
`;

export default MobileMenu;
