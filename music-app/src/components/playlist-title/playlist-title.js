import '../../css/playlist.module.css'
import classNames from 'classnames'

function PlaylistTitle(props) {
    const playlistTitleClasses = classNames({
        'playlist-title': true,
        [`${props.addClass}`]: props.addClass,
    })

    return (
        <div className={playlistTitleClasses}>
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
                <svg className="playlist-title__svg" alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                </svg>
            </div>
        </div>
    )
}

export default PlaylistTitle
