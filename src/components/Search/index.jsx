import styled from "styled-components"
import Input from "../Input"
import { useState } from "react"
import { books } from "./dataSearch"

const SearchContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`

const Title = styled.h2`
    color: #FFFFFF;
    font-size: 2.2rem;
`

function Search() {
    const [searchedBooks, setSearchedBooks] = useState([])

    return (
        <SearchContainer>
            <Title>Encontre seu livro em nossa estante</Title>
            <Input type="text" 
                placeholder="Busque sua próxima leitura"
                onBlur={evento => {
                    const typedText = evento.target.value
                    const searchResult = books.filter(book => book.nome.includes(typedText))
                    setSearchedBooks(searchResult)
                }}
            />
        </SearchContainer>
    )
}

export default Search