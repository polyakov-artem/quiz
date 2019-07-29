import React, { Component } from 'react';
import Layout from './Container/Layout/Layout';
import QuizPage from './Components/QuizPage/QuizPage'
import AuthPage from './Container/AuthPage/AuthPage'
import CreateTestPage from './Components/CreateTestPage/CreateTestPage'
import QuizListPage from './Container/QuizListPage/QuizListPage'
import {Route, Switch, withRouter} from 'react-router-dom'

export const {Provider, Consumer} = React.createContext();

class App extends Component {
  state = {authorized: false}

  logoutHandler=()=>{
    this.setState({authorized: false});
    this.props.history.push({
      pathname: '/quiz'
    })
  }

  loginHandler=()=>{
    this.setState({authorized: true});
    this.props.history.push({
      pathname: '/quiz'
    })
  }

  render() {
    const context = {loginHandler: this.loginHandler, logoutHandler: this.logoutHandler, authorized: this.state.authorized };
    
    return (
      <Provider value = {context}>
        <div className="App">
          <Layout >
            <Switch>
              <Route path='/quiz/auth' component={AuthPage}/>
              <Route path='/quiz/quiz-creator' component={CreateTestPage}/>
              <Route path='/quiz/:id' component={QuizPage}/>
              <Route path='/quiz' exact component={QuizListPage}/>
            </Switch>
          </Layout>
        </div>
      </Provider>
    );
  }
}

export default withRouter(App);


