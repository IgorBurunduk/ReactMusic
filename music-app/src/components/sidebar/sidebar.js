import './sidebar.css'
import { useEffect, useState } from 'react'
import Skeleton from '../skeleton/skeleton'

function SidebarBlock(props) {
  let classes = 'sidebar '
  if (props.addClass) {
    classes += props.addClass
  }

  return (<div className={classes}>
    <SidebarPersonal name='Sergey.Ivanov' />
    <div className='sidebarBlock'>
      <SidebarList />
    </div>
  </div>)
}

function SidebarPersonal(props) {
  return (<div className='sidebar__personal'>
    <p className='sidebar__personal-name'>{props.name}</p>
    <div className='sidebar__avatar' />
  </div>)
}

function SidebarList() {
  return (<div className='sidebar__list'>
    <SidebarItem link='https://' imageSrc='img/playlist01.png' imageAlt='day&#8217;s playlist' />
    <SidebarItem link='https://' imageSrc='img/playlist02.png' imageAlt='day&#8217;s playlist' />
    <SidebarItem link='https://' imageSrc='img/playlist03.png' imageAlt='day&#8217;s playlist' />
  </div>)
}

function SidebarItem(props) {
  let classes = props.addClass ? `sidebar__item loading ${props.addClass}` : `sidebar__item loading `

  const [elClass, setElClass] = useState(classes)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoad(!load)
      classes = classes.replace('loading ', ' ')
      setElClass(classes)
    }, 5000)
    return () => {
      clearTimeout(loadingTimer)
    }
  }, [])

  return (<div className={elClass}>
    {load ? <a className='sidebar__link' href={props.link}>
      <img className='sidebar__img' src={props.imageSrc} alt={props.imageAlt} />
    </a> : <Skeleton elem='sidebar' />}
  </div>)
}

export default SidebarBlock
