import React from 'react';
import './Authorization.css'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Authorization = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
 const navigate = useNavigate();

  async function signIn(e) {
    e.preventDefault();
    try {
      setError(false);

      // Проверка формата почты
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(login)) {
        setError('Введенный e-mail не соответствует формату');
        return;
        
      }
     
      // Замените этот код реальным запросом к вашему бэкенду
      const response = await axios.post('http://85.209.9.201/api/auth/login', {
        email: login,
        password: password,
      }, {
        headers: {
          Authorization: `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyMzE4MDExLCJpYXQiOjE3MDIyMzE2MTEsImp0aSI6IjE4MzkzM2U0NWUwOTQxZmJiZmQwY2ViNjdjOTU1YzJiIiwidXNlcl9pZCI6OH0.UJnPkeqcN6fZWh-Hd4owyXH0RL1yarkXpz5MzVhpZKA}`,
        },
      });

      console.log('Успешный вход:', response.data);
      // Добавьте код для обновления контекста аутентификации с полученными токенами
      // Например: authContext.setTokens(response.data.accessToken, response.data.refreshToken);

      // Переход на главную страницу
      navigate('/');
    } catch (error) {
      setError(true);
      console.error('Ошибка во время входа:', error);
    }
  }

  return (
    <div className='cc'>
      <div className="auth_box">
        <div className="auth_reg">
          <h1>Вход</h1>
        </div>
        <form onSubmit={signIn}>
          <div className='e-mail'>
            <input
              type="text"
              placeholder='Введите e-mail'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className='password'>
            <input
              type="password"
              name="password"
              placeholder='Введите пароль'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <span className="error" role="alert">{error}</span>}
          <div className="Sign_in">
            <button type="submit">Войти</button>
          </div>
        </form>
        {/* ... остальной код ... */}
      </div>
    </div>
  );
};

export default Authorization;
