import logo from '../../images/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;
    gap: 10px;
    cursor: pointer;
`

export default function Logo() {
    return (
        <>
            <LogoContainer>
                <img src={logo} alt='logotipo' />
                <p><strong>Alura</strong>Books</p>
            </LogoContainer>
        </>
    )
}