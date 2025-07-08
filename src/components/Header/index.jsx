import Logo from '../Logo'
import OptionsHeader from '../optionsHeader'
import IconsHeader from '../IconsHeader'
import './style.css'

export default function Header() {
    return (
        <>
            <header className='App-header'>
                <Logo/>
                <OptionsHeader/>
                <IconsHeader/>
            </header>
        </>
    )
}