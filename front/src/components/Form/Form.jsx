
import { useState } from 'react'
import validation from './validation'

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    /* Evita que la pagina se recargue */
    event.preventDefault()
    login(userData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" name='username' value={userData.name} onChange={handleInputChange} />
      {errors.username && <p>{errors.username}</p>}
      <label htmlFor="password">Password:</label>
      <input type="text" name='password' value={userData.password} onChange={handleInputChange} />
      {errors.password && <p>{errors.password}</p>}
      <button>LOGIN</button>
    </form>
  )
}

export default Form
