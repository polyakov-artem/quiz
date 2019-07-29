import React, { Component } from 'react';
import axios from '../../axios/axios';

import './QuizListPage.scss';

import {NavLink} from 'react-router-dom'
import Loader from '../../Components/Loader/Loader'


class QuizListPage extends Component {

  state = {
    quizes: [],
    isListLoaded: false
  }

  async componentDidMount() {
    try{
      const response = await axios.get('/quizes.json');

      const quizes = Object.keys(response.data).map( (quizKey, index) => {
          return {id: quizKey, name: `Тест №${index+1}`}
      });

      this.setState({ quizes , isListLoaded: true})
    } catch (e){
      console.log(e)
    }
  }

  renderQuizes(){
    return this.state.quizes.map( (quiz)=>(
      <li className='quiz-list__item' key={quiz.id}>
        <NavLink className='quiz-list__link' to={'/quiz/'+quiz.id}>
          {quiz.name}
        </NavLink>
      </li>
    ))
  }

  render() {
    const list = 
      <ul className= 'quiz-list'>
        { this.renderQuizes() }
      </ul>
      
    return (
      <div className='quiz-list-page'>
        <h1 className='quiz-list-page__header'>Список тестов</h1>
        {this.state.isListLoaded
          ? list
          : <Loader className ='quiz-list-page__loader' />
        }
      </div>
    );
  }
}

export default QuizListPage;