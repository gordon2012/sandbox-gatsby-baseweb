import React from 'react';
import Layout from '../components/layout';
import Panel from '../components/panel';

const AboutPage = () => (
  <Layout>
    <h1>About</h1>

    <Panel>
      <Panel.Left color="red">LEFT</Panel.Left>
      <Panel.Right>RIGHT</Panel.Right>
    </Panel>
  </Layout>
);

export default AboutPage;
