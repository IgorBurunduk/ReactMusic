import './centerBlock.css'
import SearchBlock from '../search/search'
import FilterBlock from '../filter/filter'
import ContentBlock from '../content/content'

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
      <ContentBlock />
    </div>
  )
}

export default CenterBlock
