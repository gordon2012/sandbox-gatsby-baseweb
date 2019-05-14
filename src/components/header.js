import React from 'react';

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';

import { Block } from 'baseui/block';

import { styled } from 'baseui';
import { Button } from 'baseui/button';
import { Link as GatsbyLink } from 'gatsby';
const Link = styled(GatsbyLink, {
  textDecoration: 'none',
  fontWeight: 'bold',
  color: '#ccc',
  ':hover': {
    color: '#666',
  },
});

const Header = () => (
  <HeaderNavigation $style={{ paddingRight: '15px' }}>
    <NavigationList align={ALIGN.left}>
      <NavigationItem>Uber</NavigationItem>
    </NavigationList>
    <NavigationList align={ALIGN.center} />
    <NavigationList align={ALIGN.right}>
      <NavigationItem>
        <Link to="/" activeStyle={{ color: '#333' }}>
          Home
        </Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/about" activeStyle={{ color: '#333' }}>
          About
        </Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/contact" activeStyle={{ color: '#333' }}>
          Contact
        </Link>
      </NavigationItem>
    </NavigationList>
    <NavigationList align={ALIGN.right}>
      <NavigationItem>
        <a href="https://google.com">
          <Button>Get started</Button>
        </a>
      </NavigationItem>
    </NavigationList>
  </HeaderNavigation>
);

export default Header;
