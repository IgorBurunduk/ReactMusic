import classNames from 'classnames'

function MenuBlock(props) {
    const menuBlockClasses = classNames({
        'menu': true,
        'opened': props.openMenu,
        [`${props.addClass}`]: props.addClass,
    })

    const menuList = [{
        link: 'https://', text: 'Главное',
    }, {
        link: 'https://', text: 'Мой плейлист',
    }, {
        link: 'https://', text: 'Войти',
    }]


    return (<div className={menuBlockClasses}>
        <ul className='menu__list'>
            {menuList.map((item) => <MenuItem key={item.text} link={item.link} text={item.text} />)}
        </ul>
    </div>)
}

function MenuItem(props) {
    return (<li className='menu__item'>
        <a href={props.link} className='menu__link'>{props.text}</a>
    </li>)
}

export default MenuBlock
