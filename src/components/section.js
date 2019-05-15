import React from 'react';
import { Block } from 'baseui/block';

const Section = properties => {
  const { children, width, background, ...props } = properties;

  let style = {};

  if (background) {
    style.background = background;
  }

  return (
    <Block $style={style}>
      <Block width={width} margin="0 auto">
        {children}
      </Block>
    </Block>
  );
};

export default Section;
