import './nav.css'
import MenuBlock from '../menu/menu'

function NavBlock(props) {
  let classes = 'nav '
  if (props.addClass) {
    classes += props.addClass
  }

  return (
    <nav className={classes}>
      <NavLogo addClass='nav__logo' alt='logo' />
      <NavBurger addClass='nav__burger' />
      <MenuBlock addClass='nav__menu' />
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

  return (
    <div className={classes}>
      <span className='burger__line' />
      <span className='burger__line' />
      <span className='burger__line' />
    </div>
  );
}


export default NavBlock;
