import styled from 'styled-components'

const listItems = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

const OptionsContainer = styled.ul`
    display: flex;
    gap: 30px;
`

const Option = styled.li`
    cursor: pointer;
`

export default function OptionsHeader() {
    return (
        <>
            <OptionsContainer>
                {listItems.map(item => (
                    <Option><p>{item}</p></Option>
                ))}
            </OptionsContainer>
        </>
    )
}