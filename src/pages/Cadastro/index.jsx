import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-10 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Cadastro
      </h2>

      <form className="flex flex-col gap-5">
        <input type="text" placeholder="Nome" className="w-full px-3 py-2 border border-x-gray-300 rounded-md focus:outline-none"/>
        <input type="email" placeholder="e-mail" className="w-full px-3 py-2 border border-x-gray-300 rounded-md focus:outline-none"/>
        <input type="password" placeholder="Senha" className="w-full px-3 py-2 border border-x-gray-300 rounded-md focus:outline-none"/>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400 ease-in duration-100">
          Cadastrar-se
        </button>
      </form>
      <Link to="/login" className="text-blue-700 hover:underline mt-4 block text-center">
        Ja tem uma conta? Faca login
      </Link>
    </div>
  )
}

export default Cadastro;
