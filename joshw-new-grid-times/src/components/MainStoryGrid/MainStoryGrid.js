import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { COLORS, QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStoryWrapper>
              <SecondaryStory key={story.id} {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper key={story.id}>
              <OpinionStory  {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const VerticalStoryWrapper = styled.div`
  &:not(:last-of-type) {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid ${COLORS.gray[300]};
  }

  
`;

const OpinionStoryWrapper = styled(VerticalStoryWrapper)`
  @media ${QUERIES.tabletOnly} {
    &:not(:last-of-type) {
      padding-bottom: revert;
      margin-bottom: revert;
      border-bottom: revert;
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
    margin-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
    & > * {
      flex: 1;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.tabletOnly} {
    margin-top: 48px;
    margin-bottom: 48px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-top: 16px;
    border-top: 1px solid ${COLORS.gray[300]};
    margin-top: 16px;
  }
`;

export default MainStoryGrid;
