import styled from "styled-components";


export const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 90px;
    align-items: center;
    justify-content: center;
    align-content: center;
`;

export const Card = styled.div`
    cursor: pointer;
    width: 260px;
    box-shadow: 1px 3px 14px 0px rgba(0,0,0,0.61);
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 50px;
    div {
        display: flex;
        flex-direction: column;       
    }
`;

export const ImgCard = styled.div`
    img {
        width: 250px;
        border-radius: 5px 5px 0px 0px;
    }
`;

export const NomeCard = styled.div`
    span {
        padding-top: 15px;
        padding-left: 15px;
        opacity: 0.7;
    }
`;

export const ValorCard = styled.div`
    span {
        padding-left: 15px;
    }
`;