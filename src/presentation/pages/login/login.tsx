import React from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, LoginFooter, Input, FormStatus } from '@/presentation/components'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader/>
      <form className={Styles.form} action="">
        <h2>Login</h2>
        <Input type="email" name="email" id="email" placeholder="Digite seu e-mail"/>
        <Input type="password" name="password" id="password" placeholder="Digite seu senha"/>
        <button className={Styles.submit} type="submit">Entre</button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus/>
      </form>
      <LoginFooter/>
    </div>
  )
}

export default Login
