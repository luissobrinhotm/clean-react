import React, { useEffect, useState } from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, LoginFooter, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/froms/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation?: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    errorMessage: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    validation.validate({ email: state.email })
  }, [state.email])
  useEffect(() => {
    validation.validate({ password: state.password })
  }, [state.password])

  return (
    <div className={Styles.login}>
      <LoginHeader/>
      <Context.Provider value={{
        state,
        setState
      }}>
        <form className={Styles.form} action="">
          <h2>Login</h2>
          <Input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
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
