import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import OAuth from '../components/OAuth'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (userCredential.user) navigate('/')
    } catch (error) {
      toast.error('Bad User Credentials')
    }
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome back!</p>
        </header>

        <main>
          <form onSubmit={onSubmit}>
            <input
              placeholder="Email"
              type="email"
              id="email"
              value={email}
              className="emailInput"
              onChange={onChange}
            />

            <div className="passwordInputDiv">
              <input
                className="passwordInput"
                placeholder="Password"
                id="password"
                value={password}
                onChange={onChange}
                type={showPassword ? 'text' : 'password'}
              />
              <img
                onClick={() => setShowPassword((prevState) => !prevState)}
                src={visibilityIcon}
                alt="show password"
                className="showPassword"
              />
            </div>
            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot Password
            </Link>

            <div className="signInBar">
              <p className="signInText">Sign In</p>
              <button className="signInButton">
                <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
              </button>
            </div>
          </form>

          <OAuth/>

          <Link to="/sign-up" className="registerLink">
            Sign Up Instesd
          </Link>
        </main>
      </div>
    </>
  )
}

export default SignIn
