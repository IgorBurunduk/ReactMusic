import classNames from 'classnames'
import s from '../../css/centerblock.module.css'
import SearchBlock from '../search/search'
import FilterBlock from '../filter/filter'
import ContentBlock from '../content/content'

function Centerblock(props) {
    const centerBlockClasses = classNames({
        centerblock: true,
        [`${props.addClass}`]: props.addClass,
    })

    return (
        <div className={centerBlockClasses}>
            <SearchBlock addClass={s.search} />
            <h2 className={s.h2}>Треки</h2>
            <FilterBlock addClass={s.filter} />
            <ContentBlock />
        </div>
    )
}

export default Centerblock
