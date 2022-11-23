import { useState } from 'react'
import './filter.css'
import classNames from 'classnames'
import FilterButton from '../filter-button/filter-button'
import FilterModal from '../filter-modal/filter-modal'

function FilterBlock(props) {
    const filterBlockClasses = classNames({
        'filter': true,
        [`${props.addClass}`]: props.addClass,
    })

    const filterButtons = [{
        filterVar: 'author', btnClasses: 'filter__button _btn-text button-author', btnText: 'исполнителю',
    }, {
        filterVar: 'year', btnClasses: 'filter__button _btn-text button-year', btnText: 'году выпуска',
    }, {
        filterVar: 'genre', btnClasses: 'filter__button _btn-text button-genre', btnText: 'жанру',
    }]

    const [openFilter, setFilters] = useState('')
    const [propEl, setPropEl] = useState(0)

    const resultFilters = filterButtons.map(btn => <FilterButton
        key={btn.btnText}
        filterVar={btn.filterVar}
        btnClasses={btn.btnClasses}
        btnText={btn.btnText}
        openedFilter={openFilter}
        setOpenFilter={setFilters}
        propEl={propEl}
        setPropEl={setPropEl}
    />)

    return (<div className={filterBlockClasses}>
        <div className='filter__title'>Искать по:</div>
        {resultFilters}
        <FilterModal openedFilter={openFilter} propEl={propEl} />
    </div>)
}

export default FilterBlock
