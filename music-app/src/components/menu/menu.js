function MenuBlock(props) {
  let classes = 'menu '
  if (props.addClass) {
    classes += props.addClass
  }

  if(props.openMenu) {
    classes += ' opened'
  }

  const menuList = [
    {
      link: 'https://',
      text: 'Главное'
    },
    {
      link: 'https://',
      text: 'Мой плейлист'
    },
    {
      link: 'https://',
      text: 'Войти'
    }
  ]


  return (
    <div className={classes}>
      <ul className='menu__list'>
        {
          menuList.map((item)=>
            <MenuItem key={item.text} link={item.link} text={item.text} />
          )
        }
      </ul>
    </div>
  );
}

function MenuItem(props){
  return (
    <li className='menu__item'>
      <a href={props.link} className='menu__link'>{props.text}</a>
    </li>
  );
}

export default MenuBlock;
