import React, { useState } from 'react';

import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import Button from '../UI/Button';

import style from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  return (<div>
    <ErrorModal title='An error occured' msg="Something isn't right"/>
    <Card sexyLook={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          value={enteredUsername}
          onChange={usernameChangeHandler}
        ></input>
        <label htmlFor='age'>Age (Year)</label>
        <input
          id='age'
          type='number'
          value={enteredAge}
          onChange={ageChangeHandler}
        ></input>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  </div>
  );
  
};

export default AddUser;
