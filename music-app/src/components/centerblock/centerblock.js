import './centerblock.css'
import classNames from 'classnames'
import SearchBlock from '../search/search'
import FilterBlock from '../filter/filter'
import ContentBlock from '../content/content'

function Centerblock(props) {
    const centerBlockClasses = classNames({
        'centerblock': true,
        [`${props.addClass}`]: props.addClass,
    })

    return (<div className={centerBlockClasses}>
        <SearchBlock addClass='centerblock__search' />
        <h2 className='centerblock__h2'>Треки</h2>
        <FilterBlock addClass='centerblock__filter' />
        <ContentBlock />
    </div>)
}

export default Centerblock
