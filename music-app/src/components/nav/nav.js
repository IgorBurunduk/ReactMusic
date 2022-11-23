import classNames from 'classnames'
import { useState } from 'react'
import './nav.css'
import MenuBlock from '../menu/menu'

function NavBlock(props) {
    const navBlockClasses = classNames({
        'nav': true,
        [`${props.addClass}`]: props.addClass,
    })

    const [openMenu, setOpenMenu] = useState(false)

    return (<nav className={navBlockClasses}>
        <NavLogo addClass='nav__logo' alt='logo' />
        <NavBurger addClass='nav__burger' openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <MenuBlock addClass='nav__menu' openMenu={openMenu} />
    </nav>)
}

function NavLogo(props) {
    const navLogoClasses = classNames({
        'logo': true,
        [`${props.addClass}`]: props.addClass,
    })

    return (<div className={navLogoClasses}>
        <img className='logo__image' src='img/logo.png' alt={props.alt} />
    </div>)
}

function NavBurger(props) {
    const navBurgerClasses = classNames({
        'burger': true,
        'opened': props.openMenu,
        [`${props.addClass}`]: props.addClass,
    })

    return (<button type='button' className={navBurgerClasses} onClick={() => props.setOpenMenu(!props.openMenu)}>
        <span className='burger__line' />
        <span className='burger__line' />
        <span className='burger__line' />
    </button>)
}

export default NavBlock
