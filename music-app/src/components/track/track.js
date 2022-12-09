import classNames from 'classnames'
import s from '../../css/track.module.css'

function TrackBlock(props) {
    const trackBlockClasses = classNames({
        track: true,
        [`${props.addClass}`]: props.addClass,
    })

    return (
        <div className={trackBlockClasses}>
            <TrackTitle
                link={props.track.link}
                type={props.track.typeSong}
                name={props.track.name}
            />
            <TrackAuthor link={props.author.link} name={props.author.name} />
            <TrackAlbum link={props.album.link} name={props.album.name} />
            <TrackTime time={props.track.time} />
        </div>
    )
}

function TrackTitle(props) {
    return (
        <div className={s.title}>
            <div className={s.title_image}>
                <svg className={s.title_svg} alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </svg>
            </div>
            <div className={s.title_text}>
                <a className={s.title_link} href={props.link}>
                    {props.name}{' '}
                    <span className={s.title_span}>{props.typeSong}</span>
                </a>
            </div>
        </div>
    )
}

function TrackAuthor(props) {
    return (
        <div className={s.author}>
            <a className={s.author_link} href={props.link}>
                {props.name}
            </a>
        </div>
    )
}

function TrackAlbum(props) {
    return (
        <div className={s.album}>
            <a className={s.album_link} href={props.link}>
                {props.name}
            </a>
        </div>
    )
}

function TrackTime(props) {
    return (
        <div className={s.time}>
            <svg className={s.time_svg} alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className={s.time_text}>{props.time}</span>
        </div>
    )
}

export default TrackBlock
