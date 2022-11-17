import { useState } from 'react'
import './filter.css'
import FilterButton from '../filter-button/filter-button'


function FilterBlock(props) {
  let classes = 'filter '
  if (props.addClass) {
    classes += props.addClass
  }

  const filterButtons = [{
    filterVar: 'author',
    btnClasses: 'filter__button _btn-text button-author',
    btnText: 'исполнителю'
  }, {
    filterVar: 'year',
    btnClasses: 'filter__button _btn-text button-year',
    btnText: 'году выпуска'
  }, {
    filterVar: 'genre',
    btnClasses: 'filter__button _btn-text button-genre',
    btnText: 'жанру'
  }]

  const [openFilter, setFilters] = useState('')

  const resultFilters = filterButtons.map(btn =>
    <FilterButton
      key={btn.btnText}
      filterVar={btn.filterVar}
      btnClasses={btn.btnClasses}
      btnText={btn.btnText}
      openedFilter={openFilter}
      setOpenFilter={setFilters}

    />)

  return (<div className={classes}>
    <div className='filter__title'>Искать по:</div>
    {resultFilters}
  </div>)
}

export default FilterBlock
