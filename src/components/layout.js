import React from 'react';
import { Block } from 'baseui/block';

import '../style.css';
import Header from './Header';

const Layout = props => {
  return (
    <React.Fragment>
      <Header />
      <Block width="800px" margin="0 auto">
        {props.children}
      </Block>
    </React.Fragment>
  );
};

export default Layout;
