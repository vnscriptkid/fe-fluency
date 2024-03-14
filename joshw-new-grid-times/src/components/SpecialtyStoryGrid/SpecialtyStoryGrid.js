import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { COLORS, QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <SportMiniStoryWrapper key={data.id}>
              <MiniStory  {...data} />
            </SportMiniStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: 100%;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: minmax(0, auto);
    gap: 64px 0;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr minmax(0, 1fr);
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
    padding-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
    margin-right: 16px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

const SportsSection = styled.section`
  
`;

const SportMiniStoryWrapper = styled.div`
  min-width: 220px;
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  overflow: auto;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    gap: 16px;
    grid-template-columns: revert;
  }
`;

export default SpecialtyStoryGrid;
