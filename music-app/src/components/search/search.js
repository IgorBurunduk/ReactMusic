import './search.css'
import classNames from 'classnames'

function SearchBlock(props) {
    const searchBlockClasses = classNames({
        'search': true,
        [`${props.addClass}`]: props.addClass,
    })

    return (<div className={searchBlockClasses}>
        <svg className='search__svg'>
            <use xlinkHref='img/icon/sprite.svg#icon-search' />
        </svg>
        <input className='search__text' type='search' placeholder='Поиск' name='search' />
    </div>)
}

export default SearchBlock
