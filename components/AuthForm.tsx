import React from 'react'

const AuthForm = ({type}:{type: string}) => {
  return (
    <section className='auth-form'>{type}</section>
  )
}

export default AuthForm