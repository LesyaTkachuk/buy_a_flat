import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import { authActions, authSelectors } from '../../../redux/auth';

import 'react-toastify/dist/ReactToastify.css';

class Notification extends Component {
  static propTypes = {
    error: PropTypes.string.isRequired,
    toggleError: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { error } = this.props;
    toast(`🦄 ${error}`);
    setTimeout(() => {
      this.props.unsetError();
    }, 5000);
  }

  render() {
    return (
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
      />
    );
  }
}

const mapStateToProps = state => ({
  authError: authSelectors.getError(state),
});

const mapDispatchToProps = {
  unsetError: authActions.unsetError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
