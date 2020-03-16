import React, { useState } from 'react';
import { navigate } from '../../navigation/NavigationService';
import { routes } from '../../config';
import LoginView from './view';
const validationMessage = "Name can't be empty";

export default function Login() {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState('');
  const handleSubmit = e => {
    if (!inputs.userName) {
      return setMessage(validationMessage);
    } else {
      navigate(routes.HOME);
    }
  };

  const onChange = text => {
    setInputs({ ...inputs, userName: text });
    text ? setMessage('') : setMessage(validationMessage);
  };

  return (
    <LoginView
      onChange={onChange}
      handleSubmit={handleSubmit}
      message={message}
    />
  );
}
