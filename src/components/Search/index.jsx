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

const BooksContainer = styled.section`
    display: flex;
    width: 80vw;
    margin-top: 50px;
    gap: 20px;
`

const Book = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    cursor: pointer;
`

function Search() {
    const [searchedBooks, setSearchedBooks] = useState([])

    console.log(searchedBooks)

    return (
        <SearchContainer>
            <Title>Encontre seu livro em nossa estante</Title>
            <Input type="text" 
                placeholder="Busque sua próxima leitura"
                onBlur={evento => {
                    const typedText = evento.target.value || "¨"
                    const searchResult = books.filter(book => book.nome.includes(typedText))
                    setSearchedBooks(searchResult)
                }}
            />
            <BooksContainer>
                { searchedBooks.map(book => (
                    <Book>
                        <p>{book.nome}</p>
                        <img src={book.src}/>
                    </Book>
                )) }
            </BooksContainer>
        </SearchContainer>
    )
}

export default Search