/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  background: var(--transparent-gray-15, rgba(128, 128, 128, 0.15));
  box-shadow: 0px 2px 4px 0px rgba(128, 128, 128, 0.35) inset;
  overflow: auto;
  `;
  
  const Inner = styled.div`
  height: 100%;
  width: ${p => p.value}%;
  background: var(--primary, #4747EB);
  border-radius: ${p => p.value >= 98 ? '4px' : '4px 0 0 4px'};
  `;
  
  const LargeWrapper = styled(Wrapper)`
  height: 24px;
  padding: 4px;
`;

const MediumWrapper = styled(Wrapper)`
  height: 12px;
`;

const SmallWrapper = styled(Wrapper)`
  height: 8px;
`;



const ProgressBar = ({ value, size }) => {
  var TheWrapper = <div />

  switch (size) {
    case "large" : {
      TheWrapper = LargeWrapper;
      break;
    }
    case "medium": {
      TheWrapper = MediumWrapper;
      break;
    }
    case "small": {
      TheWrapper = SmallWrapper;
      break;
    }
    default: {}
  }

  return (
    <TheWrapper role="progressbar" aria-valuenow={value}>
      <Inner role="presentation" value={value}/>
    </TheWrapper>
  )
};

export default ProgressBar;
