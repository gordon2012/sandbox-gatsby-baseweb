import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider } from 'styletron-react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Header from '../components/header';
import Link from '../components/link';
import Panel from '../components/panel';
import Section from '../components/section';

const engine = new Styletron({
  hydrate: document.getElementsByClassName('_styletron_hydrate_'),
});

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Components', module)
  .addDecorator(story => <Provider value={engine}>{story()}</Provider>)
  .add('Header', () => <Header />)
  .add('Link', () => <Link to="/">a link</Link>)
  .add('Panel', () => (
    <Panel>
      <Panel.Left>Left</Panel.Left>
      <Panel.Right>Right</Panel.Right>
    </Panel>
  ))
  .add('Section', () => <Section width="500px">Section</Section>);
