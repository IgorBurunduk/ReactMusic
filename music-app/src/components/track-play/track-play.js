import classNames from 'classnames'
import { useEffect, useState } from 'react'
import s from '../../css/track.module.css'
import btn from '../../css/btn.module.css'
import Skeleton from '../skeleton/skeleton'

function TrackPlay(props) {
    let trackPlayClasses = classNames({
        [s.play]: true,
        loading: true,
        [`${props.addClass}`]: props.addClass,
    })

    const [elClass, setElClass] = useState(trackPlayClasses)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setLoad(!load)
            trackPlayClasses = trackPlayClasses.replace('loading ', ' ')
            setElClass(trackPlayClasses)
        }, 5000)
        return () => {
            clearTimeout(loadingTimer)
        }
    }, [])

    return (
        <div className={elClass}>
            {load ? (
                <div className={s.play_contain}>
                    <TrackImage />
                    <TrackAuthor />
                    <TrackAlbum />
                </div>
            ) : (
                <Skeleton elem="track" />
            )}
            <div className={s.play_like_dis}>
                <TrackBtnLike />
                <TrackBtnDislike />
            </div>
        </div>
    )
}

function TrackBtnLike() {
    return (
        <div className={[s.play_like, btn.icon].join(' ')}>
            <svg className={s.play_like_svg} alt="like">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
        </div>
    )
}

function TrackBtnDislike() {
    return (
        <div className={[s.play_dislike, btn.icon].join(' ')}>
            <svg className={s.play_dislike_svg} alt="dislike">
                <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
            </svg>
        </div>
    )
}

function TrackImage() {
    return (
        <div className={s.play_image}>
            <svg className={s.play_svg} alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
        </div>
    )
}

function TrackAuthor() {
    return (
        <div className={s.play_author}>
            <a className={s.play_author_link} href="https://">
                Ты та...
            </a>
        </div>
    )
}

function TrackAlbum() {
    return (
        <div className={s.play_album}>
            <a className={s.play_album_link} href="https://">
                Баста
            </a>
        </div>
    )
}

export default TrackPlay
