import classNames from 'classnames'
import { useState } from 'react'
import s from '../../css/nav.module.css'
import MenuBlock from '../menu/menu'

function NavBlock(props) {
    const navBlockClasses = classNames({
        nav: true,
        [`${props.addClass}`]: props.addClass,
    })

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <nav className={navBlockClasses}>
            <NavLogo addClass={s.logo} alt="logo" />
            <NavBurger
                addClass={s.burger}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
            />
            <MenuBlock addClass={s.menu} openMenu={openMenu} />
        </nav>
    )
}

function NavLogo(props) {
    const navLogoClasses = classNames({
        [s.logo]: true,
        [`${props.addClass}`]: props.addClass,
    })

    return (
        <div className={navLogoClasses}>
            <img className={s.logoImage} src="img/logo.png" alt={props.alt} />
        </div>
    )
}

function NavBurger(props) {
    const navBurgerClasses = classNames({
        [s.burger]: true,
        [s.opened]: props.openMenu,
        [`${props.addClass}`]: props.addClass,
    })

    return (
        <button
            type="button"
            className={navBurgerClasses}
            onClick={() => props.setOpenMenu(!props.openMenu)}>
            <span className={s.burger_line} />
            <span className={s.burger_line} />
            <span className={s.burger_line} />
        </button>
    )
}

export default NavBlock
