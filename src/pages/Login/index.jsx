import { useRef } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()

  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const { data: token } = await api.post('/login', {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })

      localStorage.setItem('token', token)

      navigate('/listar-usuarios')

      console.log('Usuario logado com sucesso!')
    } catch (error) {
      console.log(`Senha ou e-mail incorretos. Error: ${error}`)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-10 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Login
      </h2>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="email"
          ref={emailRef}
          placeholder="e-mail"
          className="w-full px-3 py-2 border border-x-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="password"
          ref={passwordRef}
          placeholder="Senha"
          className="w-full px-3 py-2 border border-x-gray-300 rounded-md focus:outline-none"
        />
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400 ease-in duration-100">
          Login
        </button>
      </form>
      <Link
        to="/"
        className="text-blue-700 hover:underline mt-4 block text-center"
      >
        Nao tem uma conta ? Cadastre-se
      </Link>
    </div>
  )
}

export default Login
