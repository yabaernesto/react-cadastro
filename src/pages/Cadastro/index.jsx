import { useRef } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

function Cadastro() {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await api.post('/cadastro', {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })

      console.log('Usuario cadastrado com sucesso!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-10 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Cadastro
      </h2>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          ref={nameRef}
          placeholder="Nome"
          className="w-full px-3 py-2 border border-x-gray-300 rounded-md focus:outline-none"
        />
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
          Cadastrar-se
        </button>
      </form>
      <Link
        to="/login"
        className="text-blue-700 hover:underline mt-4 block text-center"
      >
        Ja tem uma conta? Faca login
      </Link>
    </div>
  )
}

export default Cadastro
