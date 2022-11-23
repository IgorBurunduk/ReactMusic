import './filter-modal.css'
import classNames from 'classnames'

function FilterModal(props) {
    const filterModalClasses = classNames({
        'filter__modal': true,
        'active': props.openedFilter,
    })

    let result = ''
    if (props.openedFilter === 'author') {
        result = 'author'
    } else if (props.openedFilter === 'year') {
        result = 'year'
    } else if (props.openedFilter === 'genre') {
        result = 'genre'
    }

    const modalStyle = {
        left: `${props.propEl.posLeft}px`, top: `${props.propEl.posTop}px`,
    }

    return (<div className={filterModalClasses} data-opened={props.openedFilter} style={modalStyle}>{result}</div>)
}

export default FilterModal