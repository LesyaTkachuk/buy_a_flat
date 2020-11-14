import React, { Component } from 'react';
import AuthNav from '../AuthNav';
import Logo from '../Logo';
import NavigationBar from '../NavigationBar';
import Media from 'react-media';
import Modal from '../common/Modal';
import styles from './HeaderContent.module.css';
import LoginForm from '../Login_Registration/LoginForm';
import RegistrationForm from '../Login_Registration/RegistrationForm';
import UserInfo from '../UserInfo/UserInfo';
import VerifyNotif from '../VerifyNotif';

class HeaderContent extends Component {
  render() {
    const {
      isAuthenticated,
      showLogin,
      showVerifyNotif,
      isAuthFormOpen,
    } = this.props;

    return (
      <div className={styles.headerContentWrapper}>
        {this.props.isAuthenticated && (
          <Media query="(min-width: 1240px)" render={() => <NavigationBar />} />
        )}
        <Logo />

        {isAuthenticated ? (
          <UserInfo />
        ) : (
          <Media query="(min-width: 768px)" render={() => <AuthNav />} />
        )}

        {/* {isAuthFormOpen && (
          <Modal>{showLogin ? <LoginForm /> : <RegistrationForm />}</Modal>
        )} */}
        {isAuthFormOpen && (
          <Media query="(min-width: 768px)" render={() => <Modal>{showLogin ? <LoginForm /> : <RegistrationForm />}</Modal>} />
        )}
        {showVerifyNotif && (
          <Modal>
            <VerifyNotif />
          </Modal>
        )}
      </div>
    );
  }
}
export default HeaderContent;
