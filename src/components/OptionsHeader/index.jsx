import './style.css'

const listItems = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

export default function OptionsHeader() {
    return (
        <>
            <ul className='Options'>
                {listItems.map(item => (
                    <li className='Option'><p>{item}</p></li>
                ))}
            </ul>
        </>
    )
}