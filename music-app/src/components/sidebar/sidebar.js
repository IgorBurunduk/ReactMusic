import './sidebar.css'

function SidebarBlock(props) {
  let classes = 'sidebar '
  if (props.addClass) {
    classes += props.addClass
  }

  return (
    <div className={classes}>
      <SidebarPersonal name='Sergey.Ivanov' />
      <div className='sidebarBlock'>
        <SidebarList />
      </div>
    </div>
  );
}

function SidebarPersonal(props){
  return (
    <div className='sidebar__personal'>
      <p className='sidebar__personal-name'>{props.name}</p>
      <div className='sidebar__avatar' />
    </div>
  )
}

function SidebarList() {
  return (
    <div className='sidebar__list'>
      <SidebarItem link='https://' imageSrc='img/playlist01.png' imageAlt='day&#8217;s playlist' />
      <SidebarItem link='https://' imageSrc='img/playlist02.png' imageAlt='day&#8217;s playlist' />
      <SidebarItem link='https://' imageSrc='img/playlist03.png' imageAlt='day&#8217;s playlist' />
    </div>
  )
}

function SidebarItem(props){
    return (
      <div className='sidebar__item'>
        <a className='sidebar__link' href={props.link}>
          <img className='sidebar__img' src={props.imageSrc} alt={props.imageAlt} />
        </a>
      </div>
    )
  }


export default SidebarBlock;
