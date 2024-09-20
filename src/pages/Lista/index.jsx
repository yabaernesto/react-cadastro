import { useEffect, useState } from 'react'
import api from '../../services/api'

function ListarUsuarios() {
  const [allUsers, setAllUsers] = useState([]) // Iniciar como array vazio

  useEffect(() => {
    const loadUsers = async () => {
      const token = localStorage.getItem('token')

      const {
        data: { user },
      } = await api.get('/listar-usuarios', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setAllUsers(user)
    }

    loadUsers()
  }, [])

  return (
    <div className="max-2xl mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Listar usuarios
      </h2>
      <ul className="space-y-2">
        {allUsers &&
          allUsers.length > 0 &&
          allUsers.map(user => (
            <li className="bg-gray-100 p-4 rounded-md" key={user.id}>
              <p className="font-semibold">{user.id}</p>
              <p className="font-semibold">{user.name}</p>
              <p className="font-semibold">{user.email}</p>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ListarUsuarios
