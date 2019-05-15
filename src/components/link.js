import React from 'react';

import { Link as GatsbyLink } from 'gatsby';
import { styled } from 'baseui';

const StyledGatsbyLink = styled(GatsbyLink);
const Anchor = styled('a');

const Link = props => {
  const to = props.to || '/';
  const protocol = to.split(':')[0];

  return protocol === 'http' || protocol === 'https' ? (
    <Anchor {...props} href={to}>
      {props.children}
    </Anchor>
  ) : (
    <StyledGatsbyLink {...props} to={to}>
      {props.children}
    </StyledGatsbyLink>
  );
};

export default Link;
