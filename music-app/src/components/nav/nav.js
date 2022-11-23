import { useState } from 'react'
import './nav.css'
import MenuBlock from '../menu/menu'


function NavBlock(props) {
  let classes = 'nav '
  if (props.addClass) {
    classes += props.addClass
  }

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className={classes}>
      <NavLogo addClass='nav__logo' alt='logo' />
      <NavBurger addClass='nav__burger' openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <MenuBlock addClass='nav__menu' openMenu={openMenu} />
    </nav>
  );
}

function NavLogo(props) {
  let classes = 'logo '
  if (props.addClass) {
    classes += props.addClass
  }

  return (
    <div className={classes}>
      <img className='logo__image' src='img/logo.png' alt={props.alt} />
    </div>
  );
}

function NavBurger(props) {
  let classes = 'burger '
  if (props.addClass) {
    classes += props.addClass
  }

  if(props.openMenu) {
    classes += ' opened'
  }


  return (
    <button type='button' className={classes} onClick={() => props.setOpenMenu(!props.openMenu)}>
      <span className='burger__line' />
      <span className='burger__line' />
      <span className='burger__line' />
    </button>
  );
}


export default NavBlock;
