import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, LoginFooter, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/froms/form-context'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    errorMessage: ''
  })

  const [errorState] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    main: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader/>
      <Context.Provider value={{
        state,
        errorState
      }}>
        <form className={Styles.form} action="">
          <h2>Login</h2>
          <Input type="email" name="email" id="email" placeholder="Digite seu e-mail"/>
          <Input type="password" name="password" id="password" placeholder="Digite seu senha"/>
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Entre</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus/>
        </form>
      </Context.Provider>
      <LoginFooter/>
    </div>
  )
}

export default Login
