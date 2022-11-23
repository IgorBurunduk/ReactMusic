import './filter-modal.css'

function FilterModal(props) {
  let classes = 'filter__modal'

  if (props.openedFilter) {
    classes += ' active'
  }

  let result = ''
  if (props.openedFilter === 'author') {
    result = 'author'
  } else if (props.openedFilter === 'year') {
    result = 'year'
  } else if (props.openedFilter === 'genre') {
    result = 'genre'
  }

  const modalStyle = {
    left: `${props.propEl.posLeft}px`, top: `${props.propEl.posTop}px`
  }

  return (<div className={classes} data-opened={props.openedFilter} style={modalStyle}>{result}</div>)
}

export default FilterModal