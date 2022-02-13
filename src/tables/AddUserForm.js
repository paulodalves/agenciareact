import { useState } from "react";

const AddUserForm = (props) => {

    const initialFormState = {
        id: null, 
        nome: '', 
        sobrenome: '', 
        destino: '', 
        data: ''
    }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = (event) => {
        const {name, value} = event.target

        setUser({...user, [name]: value})
    }

    return (
        <form onSubmit={event => {
            event.preventDefault()
            if (!user.nome || !user.sobrenome || !user.destino || !user.data) return

            props.addUser(user)
            setUser(initialFormState)
        }}>
            <label>Nome</label>
            <input type="text" name="nome" required value={user.nome} onChange={handleInputChange}/>
            <label>Sobre Nome</label>
            <input type="text" name="sobrenome" required value={user.sobrenome} onChange={handleInputChange}/>
            <label>Destino</label>
            <input type="text" name="destino" required value={user.destino} onChange={handleInputChange}/>
            <label>Data da viagem</label>
            <input type="date" name="data" required value={user.data} onChange={handleInputChange}/>
            <button>Marcar Viagem</button>
        </form>
    )
}

export default AddUserForm