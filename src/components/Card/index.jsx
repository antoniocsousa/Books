import styled from "styled-components"
import { Title } from "../Title"

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40vw;
    margin: 30px 0;
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 10px;
    box-shadow: #bdbdbd 2px 2px 10px;
`

const Subtitle = styled.h4`

`

const Button = styled.button`
    display: block;
    text-align: center;
    background-color: #FE8330;
    width: 25vw;
`

function Card({title, subtitle, description, image}) {
    return (
        <CardContainer>
            <div>
                <Title color="#e98e51" size="1.8rem">{title}</Title>
                <h4>{subtitle}</h4>
                <p>{description}</p>
                <Button>Saiba mais</Button>
            </div>
            <div>
                <img src={image}/>
            </div>
        </CardContainer>
    )
}

export default Card