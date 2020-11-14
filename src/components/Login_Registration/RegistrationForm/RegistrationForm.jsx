import React, { Component } from 'react';
import { Formik } from 'formik';
import { authOperations } from '../../../redux/auth';
import { connect } from 'react-redux';
import { globalActions, globalSelectors } from '../../../redux/global';
import styles from '../Login_Registration.module.css';

class RegistrationForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  initialValues = { name: '', email: '', password: '' };

  validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Не указано имя пользователя';
    }

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

  handleSubmit = async values => {
    const {
      onToggleToLogin,
      onRegister,
      toggleAuthForm,
      isAuthFormOpen,
    } = this.props;

    this.state.name = values.name;
    this.state.email = values.email;
    this.state.password = values.password;

    isAuthFormOpen && toggleAuthForm();
    onToggleToLogin();
    onRegister({ ...this.state });
  };

  render() {
    return (
      <div className={styles.modal__Registration}>
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
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className={styles.loginRegist__form}>
              <h2 className={styles.loginRegist__heading}>Регистрация</h2>

              <label className={styles.loginRegist__inputform}>
                <label className={styles.loginRegist__input_text}>Имя</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Введите ваше имя"
                  className={
                    errors.name && touched.name
                      ? styles.loginRegist__input_error +
                        ' ' +
                        styles.loginRegist__input
                      : styles.loginRegist__input
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  autoFocus
                />
                <div className={styles.loginRegist__invalid}>
                  {errors.name && touched.name && errors.name}
                </div>
              </label>

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
                />
                <div className={styles.loginRegist__invalid}>
                  {errors.email && touched.email && errors.email}
                </div>
              </label>

              <label className={(styles.loginRegist__inputform + ' ' + styles.loginRegist__input_bottom_null)}>
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
                <p className={styles.loginRegist__Bth_text}>
                  Зарегистрироваться
                </p>
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
  toggleAuthForm: globalActions.toggleAuthForm,
  onToggleToLogin: globalActions.toggleShowLogin,
  onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
