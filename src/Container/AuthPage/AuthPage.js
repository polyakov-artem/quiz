import React from 'react';
import './AuthPage.scss';
import AuthForm from '../../Components/AuthForm/AuthForm'

import {Consumer} from '../../App'

class AuthPage extends React.Component {

  render() {
    return <Consumer>
      {context => (
        <div className='auth-page'>
          <h1 className='auth-page__title'>Авторизация</h1>
          <AuthForm loginHandler = {context.loginHandler}/>
        </div>
      )}
    </Consumer>
  }
}

export default AuthPage;