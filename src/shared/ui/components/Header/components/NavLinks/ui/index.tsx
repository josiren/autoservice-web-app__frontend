import { links } from '../../../lib/data/links';
import { Nav } from './styled';

export const NavLinks = () => {
  return (
    <Nav>
      {links.map(item => {
        return (
          <ul key={item.name}>
            <li>
              <a href={item.href}>{item.name}</a>
            </li>
          </ul>
        );
      })}
    </Nav>
  );
};
