import classNames from 'classnames'
import s from '../../css/nav.module.css'

function MenuBlock(props) {
    const menuBlockClasses = classNames({
        [s.menu]: true,
        opened: props.openMenu,
        [`${props.addClass}`]: props.addClass,
    })

    const menuList = [
        {
            link: 'https://',
            text: 'Главное',
        },
        {
            link: 'https://',
            text: 'Мой плейлист',
        },
        {
            link: 'https://',
            text: 'Войти',
        },
    ]

    return (
        <div className={menuBlockClasses}>
            <ul className={s.list}>
                {menuList.map((item) => (
                    <MenuItem
                        key={item.text}
                        link={item.link}
                        text={item.text}
                    />
                ))}
            </ul>
        </div>
    )
}

function MenuItem(props) {
    return (
        <li className={s.item}>
            <a href={props.link} className={s.link}>
                {props.text}
            </a>
        </li>
    )
}

export default MenuBlock
