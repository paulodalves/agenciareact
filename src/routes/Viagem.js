import { useState } from "react";
import UserTable from "../tables/UserTables";
import AddUserForm from "../tables/AddUserForm";
import EditUserForm from "../tables/EditUserForm";

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
    <div className="conatainer">
      <h1>Marcar viagem</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Editar Cliente e viagem</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Adicionar Cliente e Destino</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>Viagens marcadas</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default Viagem