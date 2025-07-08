import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import './style.css'

const icons = [perfil, sacola]

export default function IconsHeader() {
    return (
        <>
            <ul className="Icons">
                {icons.map(icon => (
                    <li className="Icon"><img src={icon}/></li>
                ))}
            </ul>
        </>
    )
}