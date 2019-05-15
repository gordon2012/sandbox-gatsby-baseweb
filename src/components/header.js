import React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import { Button } from 'baseui/button';

import Link from './link';

const links = [
  { to: '/', title: 'Home' },
  { to: '/about', title: 'About' },
  { to: '/contact', title: 'Contact' },
];

const Header = () => (
  <HeaderNavigation $style={{ paddingRight: '15px' }}>
    <NavigationList align={ALIGN.left}>
      <NavigationItem>Uber</NavigationItem>
    </NavigationList>
    <NavigationList align={ALIGN.center} />
    <NavigationList align={ALIGN.right}>
      {links.map(link => (
        <NavigationItem key={link.to}>
          <Link
            $style={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: '#ccc',
              ':hover': {
                color: '#666',
              },
            }}
            to={link.to}
            activeStyle={{ color: '#333' }}
          >
            {link.title}
          </Link>
        </NavigationItem>
      ))}
    </NavigationList>
    <NavigationList align={ALIGN.right}>
      <NavigationItem>
        <Link to="https://google.com" $style={{ textDecoration: 'none' }}>
          <Button>Get started</Button>
        </Link>
      </NavigationItem>
    </NavigationList>
  </HeaderNavigation>
);

export default Header;
