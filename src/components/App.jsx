import React, { Component } from 'react';
import Layout from './common/Layout';
import Appbar from './common/Appbar';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <Layout>
        <Appbar />
        <Content />
      </Layout>
    );
  }
}

export default App;
