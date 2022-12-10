import s from '../../css/content.module.css'
import centerBlock from '../../css/centerblock.module.css'
import PlaylistTitle from '../playlist-title/playlist-title'
import PlaylistBlock from '../playlist/playlist'

function ContentBlock() {
    return (
        <div className={centerBlock.content}>
            <PlaylistTitle addClass={s.title} />
            <PlaylistBlock addClass={s.playlist} />
        </div>
    )
}

export default ContentBlock
