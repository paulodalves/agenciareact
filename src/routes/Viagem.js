import { useState } from "react";
import UserTable from "../tables/UserTables";
import AddUserForm from "../tables/AddUserForm";
import EditUserForm from "../tables/EditUserForm";

import './style.css';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Viagem = () => {
  const userData = [
    { id: 1, nome: 'Renan', sobrenome: 'Matheus', destino: 'Rio de Janeiro', data: '12/03/2022' },
  ]

  const [users, setUsers] = useState(userData)

  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, nome: '', sobrenome: '', destino: '', data: '' }

  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
    setEditing(false)
  }

  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({ id: user.id, nome: user.nome, sobrenome: user.sobrenome, destino: user.destino, data: user.data })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updateUser : user)))
  }

  return (
    <div>
      <Navbar />
      <main className="pages">
      <h2>Marcar viagem</h2>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h4>Editar Cliente e viagem</h4>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h4>Adicionar Cliente e Destino</h4>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h4>Viagens marcadas</h4>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default Viagem