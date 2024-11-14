import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--fontSize": 14 / 16 + "rem",
    "--borderWidth": 1 + "px",
    iconSize: 16,
    "--size": 16 + "px",
    "--padding": "4px 24px",
  },
  large: {
    "--fontSize": 18 / 16 + "rem",
    "--borderWidth": 2 + "px",
    iconSize: 24,
    "--size": 24 + "px",
    "--padding": "8px 36px",
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = SIZES[size]

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={styles}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <Input
        {...delegated}
        style={{ "--width": width + "px", ...styles }}
      ></Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  font-size: var(--fontSize);
  font-weight: 700;
  color: inherit;
  padding: var(--padding);
  width: var(--width);
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  
  &::placeholder {
    font-weight: initial;
    color: ${COLORS.gray500};
  }
  
  &:focus {
    outline-offset: 2px;
  }
  `;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2px;
  margin: auto 0;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

export default IconInput;
