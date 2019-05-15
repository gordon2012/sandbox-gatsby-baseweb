import React from 'react';
import { Block } from 'baseui/block';

import '../style.css';
import Header from './Header';

const Layout = props => {
  return (
    <>
      <Header />
      <Block>{props.children}</Block>
    </>
  );
};

export default Layout;
