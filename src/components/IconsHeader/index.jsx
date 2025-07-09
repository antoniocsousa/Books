import styled from 'styled-components'
import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'

const icons = [perfil, sacola]

const Icons = styled.ul`
    display: flex;
    gap: 30px;
`

const Icon = styled.li`
    cursor: pointer;
`

export default function IconsHeader() {
    return (
        <>
            <Icons>
                {icons.map(icon => (
                    <Icon><img src={icon}/></Icon>
                ))}
            </Icons>
        </>
    )
}