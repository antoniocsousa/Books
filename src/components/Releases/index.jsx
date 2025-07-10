import styled from "styled-components"
import { Title } from "../Title"
import { books } from "./ReleaseData"
import Card from "../Card"
import livro from "../../images/livro.png"

const ReleasesContainer = styled.section`
    background-color: #EBECEE;
    display: flex;
    flex-direction: column;
    align-items: center;
` 

const NewBooksContainer = styled.div`
    display: flex;
    gap: 10px;
    cursor: pointer;
`

function Releases() {
    return (
        <ReleasesContainer>
            <Title color='#e98e51'>Ultimos lançamentos</Title>
            <NewBooksContainer>
                {books.map(book => (
                    <img src={book.src}/>
                ))}
            </NewBooksContainer>
            <Card
                title="Talvez você se interesse por..."
                subtitle="Introdução ao React"
                description="Construindo um website com React"
                image={livro}
            />
        </ReleasesContainer>
    )
}

export default Releases