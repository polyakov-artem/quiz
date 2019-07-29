import React, {Component} from 'react'
import QuizItem from '../../Components/QuizItem/QuizItem'
import QuizResults from '../../Components/QuizResults/QuizResults'
import Loader from '../../Components/Loader/Loader'
import {withRouter} from 'react-router-dom'
import axios from '../../axios/axios';

import './Quiz.scss';

class Quiz extends Component{

  state ={
    chosenAnswerId: null,
    quiz: [],
    numberOfQuestion: 0,
    answersArray: [],
    isFinished: false,
    loading: true
  };

  navigateToList = ()=>{
    this.props.history.push({
      pathname: '/quiz'
    })
  }

  async componentDidMount(){
    try{
      const response = await axios.get('/quizes/'+this.props.match.params.id+'.json');
      this.setState({
        quiz: response.data,
        loading: false
      })
    } catch (e){
      console.log(e)
    }
  }

  retryHandler = () => {
    this.setState({
      chosenAnswerId: null,
      numberOfQuestion: 0,
      answersArray: [],
      isFinished: false
    })
  }

  chooseHandler = (chosenAnswerId) =>{
    const {quiz, numberOfQuestion} = this.state;
    const state = {...this.state};
    const answersArray = [...state.answersArray];

    if( answersArray[numberOfQuestion] ) return;

    if (quiz[numberOfQuestion].rightAnswerId === chosenAnswerId) {
        answersArray[numberOfQuestion] = 'correct'
    } else{
        answersArray[numberOfQuestion] = 'incorrect'
    };

    this.setState( {answersArray, chosenAnswerId} )

    setTimeout( 
      ()=>{ 
        if (numberOfQuestion +1 !== quiz.length) {
          this.setState( {numberOfQuestion: numberOfQuestion + 1} )
        } else this.setState( {isFinished: true } )
      }, 500)
    } 

  render(){
    const {quiz, numberOfQuestion, answersArray, isFinished, loading, chosenAnswerId} = this.state;
    const quizItem = quiz[numberOfQuestion];
    
    return(
      <div className ='quiz'>

        { isFinished
          ? <QuizResults 
            navigateToList = {this.navigateToList}
            answersArray = {answersArray}
            quiz = {quiz}
            retryHandler = {this.retryHandler} />
          : loading
            ? <Loader classes='quiz' />
            : <QuizItem
                chosenAnswerId = {chosenAnswerId}
                answerState = {answersArray[numberOfQuestion]}
                rightAnswerId = {quizItem.rightAnswerId }
                question = { quizItem.question }
                numberOfQuestion = {numberOfQuestion+1}
                numOfQuestions = { quiz.length }
                answers = { quizItem.answers }
                chooseHandler = {this.chooseHandler}
            />
        }
      </div>
    )
  }
}

export default withRouter(Quiz)