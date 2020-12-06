import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import styles from '../Login_Registration.module.css';
import { globalActions, globalSelectors } from '../../../redux/global';
import { authOperations } from '../../../redux/auth';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  initialValues = { email: '', password: '' };

  validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Не указан E-mail';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Неправильный E-mail';
    }

    if (!values.password) {
      errors.password = 'Не указан пароль';
    } else if (values.password.length < 3 || values.password.length > 8) {
      errors.password = 'Пароль меньше 3 или больше 8 символов';
    }
    return errors;
  };

  handleSubmit = async (values, { setSubmitting }) => {
    const { toggleAuthForm, onLogin, isAuthFormOpen } = this.props;

    this.state.email = values.email;
    this.state.password = values.password;

    isAuthFormOpen && toggleAuthForm();
    onLogin({ ...this.state });
  };

  render() {
    return (
      <div className={styles.modal__login}>
        <Formik
          initialValues={this.initialValues}
          validate={this.validate}
          onSubmit={this.handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className={styles.loginRegist__form}>
              <h2 className={styles.loginRegist__heading}>Вход</h2>

              <label className={styles.loginRegist__inputform}>
                <label className={styles.loginRegist__input_text}>E-mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your@e-mail.com"
                  className={
                    errors.email && touched.email
                      ? styles.loginRegist__input_error +
                        ' ' +
                        styles.loginRegist__input
                      : styles.loginRegist__input
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  autoFocus
                />
                <div className={styles.loginRegist__invalid}>
                  {errors.email && touched.email && errors.email}
                </div>
              </label>

              <label
                className={
                  styles.loginRegist__inputform +
                  ' ' +
                  styles.loginRegist__input_bottom_null
                }
              >
                <label className={styles.loginRegist__input_text}>Пароль</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Введите пароль"
                  className={
                    errors.password && touched.password
                      ? styles.loginRegist__input_error +
                        ' ' +
                        styles.loginRegist__input
                      : styles.loginRegist__input
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <div className={styles.loginRegist__invalid}>
                  {errors.password && touched.password && errors.password}
                </div>
              </label>

              <button
                type="submit"
                className={styles.loginRegist__Bth}
                disabled={isSubmitting}
              >
                <p className={styles.loginRegist__Bth_text}>Войти</p>
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthFormOpen: globalSelectors.getIsAuthFormOpen(state),
});

const mapDispatchToProps = {
  onLogin: authOperations.login,
  toggleAuthForm: globalActions.toggleAuthForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
