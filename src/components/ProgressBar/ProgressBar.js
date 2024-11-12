/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--height": 8 / 16 + "rem",
    "--padding": "0",
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--height": 12 / 16 + "rem",
    "--padding": "0",
  },
  large: {
    "--borderRadius": 8 + "px",
    "--height": 24 / 16 + "rem",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`)
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={styles}
    >
      <BarWrapper style={styles}>
        <VisuallyHidden>{value}%</VisuallyHidden>
        <Bar style={{ "--width": value + "%" }}></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(370 / 16 * 1rem);
  height: var(--height);
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
`

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when progress bar is near full */
  overflow: hidden;
  height: 100%;
`;

const Bar = styled.div`
  width: var(--width);
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
