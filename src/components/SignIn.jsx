import React, { useState } from 'react'

const SignIn = () => {
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const { email, password } = state

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    setState({
      ...state,
      email: '',
      password: ''
    })
  }

  return (
    <form className="SignIn" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />
      <input type="submit" value="Sign In" />
      <button>Sign In With Google</button>
    </form>
  )
}

export default SignIn
