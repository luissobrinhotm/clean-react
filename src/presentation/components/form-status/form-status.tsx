import React from 'react'
import Styles from '@/presentation/components/form-status/form-status-styles.scss'
import Spinner from '../spinner/spinner'

const FormStatus: React.FC = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner}/>
      <span className={Styles.error}>Error</span>
    </div>
  )
}

export default FormStatus
