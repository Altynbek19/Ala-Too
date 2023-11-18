import React from 'react';
import { Link } from 'react-router-dom'
import {useForm} from "react-hook-form";
import './Authorization.css'

const Authorization = (props) => {
  
  const {register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async data => {
      console.log(data)
  }

  console.log(errors)
  
  async function signIn(e) {
      e.preventDefault()
      try {
          setError(false)
          await signInWithEmailAndPassword(auth, login, password)
      } catch(error) {
          setError(true)
      }
  }

  function inputLogin(e) {
      setLogin(e.target.value)
  }

  function inputPassword(e) {
      setPassword(e.target.value)
  }


  return (
      <div className='cc'>
          <div className="auth_box">
              <div className="auth_reg">
                <h1>Вход</h1>  
              </div>
              <form onSubmit={{signIn}}>
              <div className='e-mail'>
                  <input type="text" placeholder='Введите e-mail'
                  {...register("email", {
                      required: "Обьязательно",
                      pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Ваш email не подходит под нужный формат"
                      }
                  })}
                  />
                  {errors.email && <span className="error" role="alert">{errors.email?.message}</span>}
              </div>
              <div className='password'>
                  <input type="password" name="cpassword" placeholder='Введите пароль'
                  {...register("cpassword", {
                      validate: (value) => {
                          if (watch('password') != value) {
                              return "Вы ввели неправильный пароль";
                          }
                      },
                      required: 'Параметр обязателен'
                  })}
                  />
                  {errors.cpassword && <span className="error" role="alert">{errors.cpassword?.message}</span>}
              </div>
              <div className="Sign_in">
                      <Link to='/createnewpassword'><a href="#" className='forget_pass'>Забыли пароль?</a></Link>
              </div>
              </form>
              <div className='forget'>
                  
                  <label htmlFor="submit"></label>
                  <Link to='/'><input className="Sign_in_input" type="submit" name="submit" value="Войти"/></Link>
                     
              </div>
              <div>             
              </div>
          </div>
      </div>
  )
};

export default Authorization