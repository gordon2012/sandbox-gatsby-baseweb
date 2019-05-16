import React from 'react';
import { Block } from 'baseui/block';

class Panel extends React.Component {
  static Left = props => (
    <Block $style={{ border: '3px solid lime' }}>{props.children}</Block>
  );

  static Right = props => (
    <Block $style={{ border: '3px solid magenta' }}>{props.children}</Block>
  );

  render() {
    return (
      <Block
        $style={{ border: '3px solid red' }}
        display="grid"
        gridTemplateColumns="1fr 1fr"
      >
        {React.Children.map(this.props.children, childElement => {
          return React.cloneElement(childElement, {});
        })}
      </Block>
    );
  }
}

export default Panel;
