const UserTable = (props) => {
    return (
        <div style={{height: "350px", overflowY: "scroll"}}>
        <table >
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Destino</th>
                    <th>Data da Viagem</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.nome}</td>
                            <td>{user.sobrenome}</td>
                            <td>{user.destino}</td>
                            <td>{user.data}</td>
                            <td>
                                <button onClick={() => props.editRow(user)} className="button muted-button">Editar</button>
                                <button onClick={() => props.deleteUser(user.id)} className="button muted-button">Deletar</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5}>Sem viagens marcadas</td>
                    </tr>
                )}

            </tbody>
        </table>
        </ div>
    )
}

export default UserTable