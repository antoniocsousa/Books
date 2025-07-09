import Logo from '../Logo'
import OptionsHeader from '../optionsHeader'
import IconsHeader from '../IconsHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: #FFFFFF;
`

export default function Header() {
    return (
        <>
            <HeaderContainer>
                <Logo/>
                <OptionsHeader/>
                <IconsHeader/>
            </HeaderContainer>
        </>
    )
}