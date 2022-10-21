import './filter.css'

function FilterBlock(props) {
  let classes = 'filter '
  if (props.addClass) {
    classes += props.addClass
  }

  return (
    <div className={classes}>
      <div className='filter__title'>Искать по:</div>
      <div className='filter__button button-author _btn-text'>исполнителю</div>
      <div className='filter__button button-year _btn-text'>году выпуска</div>
      <div className='filter__button button-genre _btn-text'>жанру</div>
    </div>
  );
}

export default FilterBlock;