import React from 'react'
import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import './Authorization.css'
import Logo from '../assets/logo_2.png'

function Password_update() {

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
                <h2 className='auth_title'>Обновление <br /> пароля</h2>   
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='e-mail'>
                    <h4>Новый пароль</h4>
                    <input type="text" placeholder='Введите пароль'
                    {...register("password", {
                        required: "Параметр обязателен",
                        minLength: {
                        value: 5,
                        message: "Минимальная длина пароля 5 символов"
                        }
                    })}
                    />
                    {errors.password && <span className="error" role="alert">{errors.password?.message}</span>}
                </div>
                <div className='password'>
                    <h4>Подтверждение пароля</h4>
                    <input type="password" name="cpassword" placeholder='Введите пароль еще раз'
                    {...register("cpassword", {
                        validate: (value) => {
                            if (watch('password') != value) {
                                return "Ваши пароли не совпадают";
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
            </div>
        </div>
    )
}

export default Password_update
