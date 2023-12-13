import React from 'react';
import './Authorization.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();

    // Простая валидация email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Введите корректный email');
      return;
    }

    // Замените на ваш реальный запрос для авторизации
    try {
      // Ваш код для запроса авторизации
      console.log('Успешная авторизация');
      setError('');

      // Перенаправление на главную страницу
      navigate('/');
    } catch (error) {
      console.error('Ошибка во время авторизации:', error);
      setError('Ошибка входа. Пожалуйста, проверьте введенные данные.');
    }
  };

  return (
    <div>
      <h2>Авторизация</h2>
      <form onSubmit={signIn}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Authorization;