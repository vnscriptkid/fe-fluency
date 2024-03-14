import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>
  console.log('show: ', showMobileMenu)

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Saleeeeee</NavLink>
          <NavLink href="/new">Newwwwww&nbsp;Releases</NavLink>
          <NavLink href="/men">Mennnnnn</NavLink>
          <NavLink href="/women">Womennnnnnn</NavLink>
          <NavLink href="/kids">Kidsssssss</NavLink>
          <NavLink href="/collections">Collectionsssssss</NavLink>
        </Nav>
        <Side>
          <MobileActions>
            <UnstyledButton>
              <Icon id={'shopping-bag'} />
              <VisuallyHidden>Open cart</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton>
              <Icon id={'search'} />
              <VisuallyHidden>Open search</VisuallyHidden>
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon id={'menu'} />
              <VisuallyHidden>Open menu</VisuallyHidden>
            </UnstyledButton>
          </MobileActions>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);

  @media ${QUERIES.tabletAndSmaller} {
    align-items: center;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${34 / 16}rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: ${17 / 16}rem;
  }
`;

export default Header;
