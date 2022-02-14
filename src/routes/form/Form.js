import { Formu } from "../style"

export const Form = () => {
    return (
        <div>
            <Formu>
                <label for="nome">Nome</label>
                <input type="text" required name="nome" />
                <label for="email">E-mail</label>
                <input type="text" required nome="email" />
                <label for="assunto">Assunto</label>
                <textarea name="assunto"></textarea>
                <div id="btn-form">
                    <button>Enviar</button>
                </div>
            </Formu>
        </div >
    )
}