import './search.css'

function SearchBlock(props) {
    let classes = 'search '
    if (props.addClass) {
        classes += props.addClass
    }

    return (<div className={classes}>
        <svg className='search__svg'>
            <use xlinkHref='img/icon/sprite.svg#icon-search' />
        </svg>
        <input className='search__text' type='search' placeholder='Поиск' name='search' />
    </div>)
}

export default SearchBlock
