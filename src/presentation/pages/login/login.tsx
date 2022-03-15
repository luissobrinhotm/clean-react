import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import LoginHeader from '@/presentation/components/login-header/login-header'
import LoginFooter from '@/presentation/components/footer/login-footer'

const Login: React.FC = () => {
  return (
        <div className={Styles.login}>
            <LoginHeader/>
            <form className={Styles.form} action="">
                <h2>Login</h2>
                <div className={Styles.inputWrap}>
                    <input type="email" name="email" id="email" placeholder="Digite seu e-mail"/>
                    <span className={Styles.status}>🔴</span>
                </div>
                <div className={Styles.inputWrap}>
                    <input type="password" name="password" id="password" placeholder="Digite seu senha"/>
                    <span className={Styles.status}>🔴</span>
                </div>
                <button className={Styles.submit} type="submit">Entre</button>
                <span className={Styles.link}>Criar conta</span>
                <div className={Styles.errorWrap}>
                    <Spinner className={Styles.spinner}/>
                    <span className={Styles.error}>Error</span>
                </div>
            </form>
            <LoginFooter/>
        </div>
  )
}

export default Login
