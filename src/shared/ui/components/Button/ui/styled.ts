'use client';

import { StyledItemProps } from '@/shared/lib';
import styled from '@emotion/styled';

export const StyledButton = styled.button<StyledItemProps>`
  min-width: 7.9375rem;
  height: 3rem;
  padding: 0 1rem;
  font-size: var(--heading-2-size);
  color: ${props => (props.primary ? 'var(--secondary-color)' : 'var(--primary-color)')};
  background-color: ${props => (props.primary ? 'var(--primary-color)' : 'var(--secondary-color)')};
  border-radius: var(--primary-border-radius);
  border: 0.0625rem solid
    ${props => (props.primary ? 'var(--secondary-color)' : 'var(--primary-color)')};
  transition: var(--transition-speed);

  &:hover {
    color: ${props => (props.primary ? 'var(--primary-color)' : 'var(--secondary-color)')};
    background-color: ${props =>
      props.primary ? 'var(--secondary-color)' : 'var(--primary-color)'};
    border-color: ${props => (props.primary ? 'var(--primary-color)' : 'var(--secondary-color)')};
    transition: var(--transition-speed);
  }
`;
