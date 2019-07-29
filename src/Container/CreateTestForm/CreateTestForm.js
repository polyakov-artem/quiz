import './CreateTestForm.scss';
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/Input'
import Select from '../../Components/Select/Select'

import axios from '../../axios/axios'
import React, { Component } from 'react';


const initialState ={
  rightAnswerId: 1,
  sendError: false,
  submitting: false,
  isFormValid: false,
  quiz: [],
  inputs: {
    question: {
      id: 0,
      value: '',
      type: 'text',
      label: 'Введите вопрос',
      errorMessage: 'Пустое поле',
      valid: false,
      touched: false,
      validation: {
        required: true,
      }
    },
    option1: {
      id: 1,
      value: '',
      type: 'text',
      label: 'Вариант 1',
      errorMessage: 'Пустое поле',
      valid: false,
      touched: false,
      validation: {
        required: true,
      }
    },
    option2: {
      id: 2,
      value: '',
      type: 'text',
      label: 'Вариант 2',
      errorMessage: 'Пустое поле',
      valid: false,
      touched: false,
      validation: {
        required: true,
      }
    },
    option3: {
      id: 3,
      value: '',
      type: 'text',
      label: 'Вариант 3',
      errorMessage: 'Пустое поле',
      valid: false,
      touched: false,
      validation: {
        required: true,
      }
    },
    option4: {
      id: 4,
      value: '',
      type: 'text',
      label: 'Вариант 4',
      errorMessage: 'Пустое поле',
      valid: false,
      touched: false,
      validation: {
        required: true,
      }
    },
  }
}

class CreateTestForm extends Component {
  state = {...initialState}

  validateControl(value, validation){
    if(!validation) return true;
    let isValid = true;

    if(validation.required){
      isValid = value.trim()!=='' && isValid
    }

    if(validation.minLength){
      isValid = value.length >= validation.minLength && isValid
    }
     return isValid
  }

 
  onChangeHandler = (inputName, event) => {
    const inputs = {...this.state.inputs};
    const input = {...inputs[inputName]};
    input.touched = true;

    inputs[inputName] = input;

    input.value = event.target.value;
    input.valid = this.validateControl(input.value, input.validation);

    const isFormValid = Object.keys(inputs).every((key)=> {
      return inputs[key].valid
    });
    
    this.setState({inputs, isFormValid})
  }

  resetForm = () =>{
     this.setState(initialState);
  }


  renderInputs() {
    const inputs = Object.keys(this.state.inputs).map((inputName)=> {
      const input = this.state.inputs[inputName];
      return (
        <Input
          touched = {input.touched}
          key = {inputName + input.id} 
          value = {input.value}
          type = {input.type}
          label = {input.label}
          htmlFor = {`${inputName}`}
          errorMessage = {input.errorMessage}
          isValid = {input.valid}
          onChange = { this.onChangeHandler.bind(this,inputName) }
        />
      )
    });
    return inputs
  }

  addQuestion=()=>{
    const {
      rightAnswerId,
      isFormValid, 
      inputs:{question,option1,option2,option3,option4},
    } = this.state;

    if(!isFormValid) return;

    const quiz = [...this.state.quiz];

    quiz.push({
      question: question.value,
      answers: [
        { text: option1.value, id: option1.id},
        { text: option2.value, id: option2.id},
        { text: option3.value, id: option3.id},
        { text: option4.value, id: option4.id},
      ],
      rightAnswerId
    });

    this.setState({
      ...initialState, quiz
    })
  }

  createTest= async e =>{
    try {
      await axios.post('/quizes.json', this.state.quiz);
      this.setState(initialState);
    } catch (e){
      console.log(e);
      this.setState({sendError: true});
    }
  }

  selectChangeHandler = event => {
    this.setState({rightAnswerId: +event.target.value})
  }

  submitHandler =(event, action)=>{
    event.preventDefault();
  }


  render() {
    const {sendError,rightAnswerId, quiz, isFormValid} = this.state;
    const errorMessage = 
      (sendError && <p className = 'create-test-form__message'>Ошибка при создании теста</p>)

    return (
      <form action="" onSubmit ={this.submitHandler} className = 'create-test-form'>
        {errorMessage}
        { this.renderInputs() }
        <Select
          value = {rightAnswerId}
          htmlFor = 'select'
          onChange = {this.selectChangeHandler}
          label = 'Номер правильного ответа'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Select>

        <div className = 'create-test-form__buttons'>
          <Button
            disabled={!isFormValid}
            onClick={this.addQuestion}
            theme='success'
            classes='create-test-form__btn'>
            Добавить вопрос
          </Button>
          <Button
            disabled={!quiz.length} 
            onClick={this.createTest}
            classes='create-test-form__btn'
            theme='info'>
            Создать тест
          </Button>
        </div>
      </form>
    );
  }
}

export default CreateTestForm;