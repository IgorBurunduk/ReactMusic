import './centerBlock.css'
import SearchBlock from '../search/search'
import FilterBlock from '../filter/filter'
import PlaylistBlock from '../playlist/playlist'

function CenterBlock(props) {
  let classes = 'centerblock '
  if (props.addClass) {
    classes += props.addClass
  }

  return (
    <div className={classes}>
      <SearchBlock addClass='centerblock__search' />
      <h2 className='centerblock__h2'>Треки</h2>
      <FilterBlock addClass='centerblock__filter' />
      <PlaylistBlock addClass='content__playlist' />
    </div>
  );
}

export default CenterBlock;
