import React from 'react';
import './CreateTestPage.scss';
import CreateTestForm from '../../Container/CreateTestForm/CreateTestForm'

class CreateTestPage extends React.Component {
  render() {
    return (
      <div className='create-test-page'>
        <h1 className='create-test-page__title'>Создание теста</h1>
        <CreateTestForm />
      </div>
    );
  }
}

export default CreateTestPage;