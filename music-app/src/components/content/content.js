import './content.css';
import PlaylistTitle from '../playlistTitle/playlistTitle'
import PlaylistBlock from '../playlist/playlist'

function ContentBlock(props) {
  return (
   <div className='content'>
     <PlaylistTitle addClass='content__title'/>
     <PlaylistBlock addClass='content__playlist' />
   </div>
  )
}

export default ContentBlock
