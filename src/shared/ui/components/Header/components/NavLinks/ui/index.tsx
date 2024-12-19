import { links } from '../../../lib/data/links';
import { Nav, StyledLink } from './styled';

export const NavLinks = () => {
  return (
    <Nav>
      {links.map(item => {
        return (
          <ul key={item.name}>
            <li>
              <StyledLink href={item.href}>{item.name}</StyledLink>
            </li>
          </ul>
        );
      })}
    </Nav>
  );
};
