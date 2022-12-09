import classNames from 'classnames'
import s from '../../css/playlist.module.css'

function PlaylistTitle(props) {
    const playlistTitleClasses = classNames({
        'playlist-title': true,
        [`${props.addClass}`]: props.addClass,
    })

    return (
        <div className={playlistTitleClasses}>
            <div className={[s.title__col, s.col01].join(' ')}>Трек</div>
            <div className={[s.title__col, s.col02].join(' ')}>ИСПОЛНИТЕЛЬ</div>
            <div className={[s.title__col, s.col03].join(' ')}>АЛЬБОМ</div>
            <div className={[s.title__col, s.col04].join(' ')}>
                <svg className={s.title_svg} alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                </svg>
            </div>
        </div>
    )
}

export default PlaylistTitle
