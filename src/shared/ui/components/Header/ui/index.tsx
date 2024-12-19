'use client';

import { StyledHeader } from './styled';
import { Logo, NavLinks, UserButtons } from '../components';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <NavLinks />
      <UserButtons />
    </StyledHeader>
  );
};
