import React from 'react';
import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import './Authorization.css'
import Logo from '../assets/logo_2.png'

const Authorization = (props) => {

    const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async data => {
        console.log(data)
    }

    console.log(errors)


    return (
        <div className="container">
            <div className="auth_logo">
                <Link to='/'>
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <div className='cc'>
                <h2 className='auth_title'>Вход</h2>   
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='e-mail'>
                    <h4>E-mail</h4>
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
                    <h4>Подтвердить пароль</h4>
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
                        <label htmlFor="submit"></label>
                        <input className="Sign_in_input" type="submit" name="submit" value="Войти"/>
                </div>
                </form>
                <div className='forget'>
                    <div>
                        <Link to='/forget_pass' className='forget_pass'>Забыли пароль?</Link>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Authorization