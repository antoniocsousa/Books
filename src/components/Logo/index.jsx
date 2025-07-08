import logo from '../../images/logo.svg'
import './style.css'

export default function Logo() {
    return (
        <>
            <div className='Logo'>
                <img src={logo} alt='logotipo' />
                <p><strong>Alura</strong>Books</p>
            </div>
        </>
    )
}