import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, LoginFooter, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/froms/form-context'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader/>
      <Context.Provider value={state}>
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
