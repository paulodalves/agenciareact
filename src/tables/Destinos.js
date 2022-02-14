import './style';


import { Card, Flex, ImgCard, NomeCard, ValorCard }from './style';

export const Destinos = (props) => {
    return (
        <Flex>
            {props.destinos.map((dest) => (
                <Card>
                    <div key={dest.id}>
                        <ImgCard>
                            <img src={dest.img} alt={dest.nome} />
                        </ImgCard>
                        <NomeCard>
                            <span>{dest.nome}</span>
                        </NomeCard>
                        <ValorCard>
                            <span>R$ {dest.valor}</span>
                        </ValorCard>
                    </div>
                </Card>
            ))}
        </Flex>
    )
}