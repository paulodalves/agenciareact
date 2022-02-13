import { useState, useEffect } from "react";
import "./style.css";

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault()

                props.updateUser(user.id, user)
            }}>
                <label>Nome</label>
                <input type="text" name="nome" required value={user.nome} onChange={handleInputChange} />
                <label>Sobre Nome</label>
                <input type="text" name="sobrenome" required value={user.sobrenome} onChange={handleInputChange} />
                <label>Destino</label>
                <input type="text" name="destino" required value={user.destino} onChange={handleInputChange} />
                <label>Data da viagem</label>
                <input type="date" name="data" required value={user.data} onChange={handleInputChange} />
                <button>Atualizar</button>
                <button onClick={() => props.setEditing(false)} className="button muted-button">Cancelar</button>
            </form>
        </div>
    )
}

export default EditUserForm