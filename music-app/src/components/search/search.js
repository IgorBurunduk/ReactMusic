import classNames from 'classnames'
import s from '../../css/search.module.css'

function SearchBlock(props) {
    const searchBlockClasses = classNames({
        search: true,
        [`${props.addClass}`]: props.addClass,
    })

    return (
        <div className={searchBlockClasses}>
            <svg className={s.svg}>
                <use xlinkHref="img/icon/sprite.svg#icon-search" />
            </svg>
            <input
                className={s.text}
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </div>
    )
}

export default SearchBlock
