import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const SelectWrapper = styled.select`

`;

const VisibleThing = styled.div`
  background-color: red;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 12px 16px;
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <VisibleThing>Hello World
        <IconWrapper>
          <Icon id={"chevron-down"}/>
        </IconWrapper>
      </VisibleThing>
    </Wrapper>
  );
};

export default Select;
