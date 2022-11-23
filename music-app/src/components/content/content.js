import './content.css';
import PlaylistTitle from '../playlist-title/playlist-title'
import PlaylistBlock from '../playlist/playlist'

function ContentBlock() {
  return (
   <div className='centerblock__content'>
     <PlaylistTitle addClass='content__title'/>
     <PlaylistBlock addClass='content__playlist' />
   </div>
  )
}

export default ContentBlock
