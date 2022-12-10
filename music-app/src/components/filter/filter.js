import { useState } from 'react'
import classNames from 'classnames'
import s from '../../css/filter.module.css'
import btn from '../../css/btn.module.css'
import FilterButton from '../filter-button/filter-button'
import FilterModal from '../filter-modal/filter-modal'

function FilterBlock(props) {
    const filterBlockClasses = classNames({
        filter: true,
        [`${props.addClass}`]: props.addClass,
    })

    const filterButtons = [
        {
            filterVar: 'author',
            btnClasses: `${s.button} ${btn.text} button-author`,
            btnText: 'исполнителю',
        },
        {
            filterVar: 'year',
            btnClasses: `${s.button} ${btn.text} button-year`,
            btnText: 'году выпуска',
        },
        {
            filterVar: 'genre',
            btnClasses: `${s.button} ${btn.text} button-genre`,
            btnText: 'жанру',
        },
    ]

    const [openFilter, setFilters] = useState('')
    const [propEl, setPropEl] = useState(0)

    const resultFilters = filterButtons.map((elem) => (
        <FilterButton
            key={elem.btnText}
            filterVar={elem.filterVar}
            btnClasses={elem.btnClasses}
            btnText={elem.btnText}
            openedFilter={openFilter}
            setOpenFilter={setFilters}
            propEl={propEl}
            setPropEl={setPropEl}
        />
    ))

    return (
        <div className={filterBlockClasses}>
            <div className={s.title}>Искать по:</div>
            {resultFilters}
            <FilterModal openedFilter={openFilter} propEl={propEl} />
        </div>
    )
}

export default FilterBlock
