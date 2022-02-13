export const Form = () => {
    return (
        <div>
            <form>

                <div class="container">
                    <input type="text" required name="nome" />
                    <label for="nome">Nome</label>
                </div>

                <div class="container">
                    <input type="text" required nome="email" />
                    <label for="email">E-mail</label>
                </div>


                <div class="container">
                    <textarea name="assunto"></textarea>
                    <label for="assunto">Assunto</label>
                </div>

                <div id="btn-form">
                    <button style={{ marginTop: "20px", marginLeft: "20px" }}>Enviar</button>
                </div>
            </form>
        </div >
    )
}