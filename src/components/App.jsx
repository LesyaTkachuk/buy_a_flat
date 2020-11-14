import React, { Component } from 'react';
import Layout from './common/Layout';
import Appbar from './common/Appbar';
import Content from './Content';
import Error from './common/Error';
import Modal from './common/Modal';
import Logout from '../components/Logout';
import Spinner from './common/Spinner';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const {
      familyError,
      authError,
      isLogoutOpen,
      isFamilyLoading,
      isAuthLoading,
    } = this.props;

    return (
      <Layout>
        <Appbar />
        {(isFamilyLoading || isAuthLoading) && (
          <Modal>
            <Spinner />
          </Modal>
        )}
        <Content />
        {(authError || familyError) && (
          <Modal>
            <Error />
          </Modal>
        )}
        {isLogoutOpen && (
          <Modal>
            <Logout />
          </Modal>
        )}
      </Layout>
    );
  }
}

export default App;
