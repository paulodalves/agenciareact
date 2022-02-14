import styled from "styled-components";

export const Conteudo = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap:100px;

    div img {
        width: 500px;
        padding-top: 50px;
    }

    div h2 {
        text-transform: uppercase;
    }

    div p {
        width: 300px;
        padding-top: 10px;
    }

    div a {
        border: solid black 1px;
        border-radius: 2px;
        padding: 8px;
        line-height: 50px;
        text-decoration: none;
        color: black;
    }

    div a:hover {
        border: solid white 1px;
        border-radius: 3px;
        color: white;
        background-color: black;
    }

    @media only screen and (max-width:841px) {
        flex-direction: column;

        div img {
            width: 300px;
            order: 2;
        }

        div {
            text-align: center;
        }

        
    }
`;

export const Divo = styled.div`
    display: flex;
    gap: 150px;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-bottom: 50px;
    
`;

export const Formu = styled.form`
    input {
        width: 500px;
    }

    textarea {
        height: 150px;
        resize: none;
    }

    @media all and (min-width:300px) and (max-width: 600px) {
        input {
        width: 300px;
    }

    textarea {
        height: 120px;
        resize: none;
    }
    }
`;
