import styled from '@emotion/styled';
import Link from 'next/link';

export const Nav = styled.nav`
  display: flex;
  column-gap: 12px;
  justify-content: center;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  font-size: var(--heading-2-size);
  font-weight: 500;
`;
