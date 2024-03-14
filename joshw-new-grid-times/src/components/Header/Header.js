import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { COLORS, QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupLaptopAbove>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroupLaptopAbove>
        <Logo />
        <SubscribeWrapper>
          <SubscribeButton>SUBSCRIBE</SubscribeButton>
          <SubLink>Already a subscriber?</SubLink>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SubscribeWrapper = styled.div`
  justify-self: end;
  position: relative;
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`;

const SubscribeButton = styled(Button)``;

const SubLink = styled.a`
  color: ${COLORS.gray[900]};
  font-family: Crimson Text;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  text-decoration-line: underline;
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 8px;
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroupLaptopAbove = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
    justify-items: start;
  }
`;

export default Header;
