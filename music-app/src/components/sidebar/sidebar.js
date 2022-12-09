import classNames from 'classnames'
import '../../css/sidebar.module.css'
import { useEffect, useState } from 'react'
import Skeleton from '../skeleton/skeleton'

function SidebarBlock(props) {
    const sidebarBlockClasses = classNames({
        sidebar: true,
        [`${props.addClass}`]: props.addClass,
    })

    return (
        <div className={sidebarBlockClasses}>
            <SidebarPersonal name="Sergey.Ivanov" />
            <div className="sidebarBlock">
                <SidebarList />
            </div>
        </div>
    )
}

function SidebarPersonal(props) {
    return (
        <div className="sidebar__personal">
            <p className="sidebar__personal-name">{props.name}</p>
            <div className="sidebar__avatar" />
        </div>
    )
}

function SidebarList() {
    return (
        <div className="sidebar__list">
            <SidebarItem
                link="https://"
                imageSrc="img/playlist01.png"
                imageAlt="day&#8217;s playlist"
            />
            <SidebarItem
                link="https://"
                imageSrc="img/playlist02.png"
                imageAlt="day&#8217;s playlist"
            />
            <SidebarItem
                link="https://"
                imageSrc="img/playlist03.png"
                imageAlt="day&#8217;s playlist"
            />
        </div>
    )
}

function SidebarItem(props) {
    let sidebarItemClasses = classNames({
        sidebar__item: true,
        loading: true,
        [`${props.addClass}`]: props.addClass,
    })

    const [elClass, setElClass] = useState(sidebarItemClasses)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setLoad(!load)
            sidebarItemClasses = sidebarItemClasses.replace('loading ', ' ')
            setElClass(sidebarItemClasses)
        }, 5000)
        return () => {
            clearTimeout(loadingTimer)
        }
    }, [])

    return (
        <div className={elClass}>
            {load ? (
                <a className="sidebar__link" href={props.link}>
                    <img
                        className="sidebar__img"
                        src={props.imageSrc}
                        alt={props.imageAlt}
                    />
                </a>
            ) : (
                <Skeleton elem="sidebar" />
            )}
        </div>
    )
}

export default SidebarBlock
