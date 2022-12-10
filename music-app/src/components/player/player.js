import classNames from 'classnames'
import TrackPlay from '../track-play/track-play'
import p from '../../css/player.module.css'
import b from '../../css/btn.module.css'

function PlayerBlock(props) {
    const playerBlockClasses = classNames({
        player: true,
        [`${props.addClass}`]: props.addClass,
    })

    return (
        <div className={playerBlockClasses}>
            <div className={p.controls}>
                <PlayerBtnPrev />
                <PlayerBtnPlay />
                <PlayerBtnNext />
                <PlayerBtnRepeat />
                <PlayerBtnShuffle />
            </div>
            <TrackPlay addClass={p.track_play} />
        </div>
    )
}

function PlayerBtnPrev() {
    return (
        <div className={b.prev}>
            <svg className={b.prev_svg} alt="prev">
                <use xlinkHref="img/icon/sprite.svg#icon-prev" />
            </svg>
        </div>
    )
}

function PlayerBtnPlay() {
    return (
        <div className={b.play}>
            <svg className={b.play_svg} alt="play">
                <use xlinkHref="img/icon/sprite.svg#icon-play" />
            </svg>
        </div>
    )
}

function PlayerBtnNext() {
    return (
        <div className={b.next}>
            <svg className={b.next_svg} alt="next">
                <use xlinkHref="img/icon/sprite.svg#icon-next" />
            </svg>
        </div>
    )
}

function PlayerBtnRepeat() {
    const btnClasses = classNames([b.repeat, '_btn_icon'])
    return (
        <div className={btnClasses}>
            <svg className={b.repeat_svg} alt="repeat">
                <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
            </svg>
        </div>
    )
}

function PlayerBtnShuffle() {
    const btnClasses = classNames([b.shuffle, '_btn_icon'])
    return (
        <div className={btnClasses}>
            <svg className={b.shuffle_svg} alt="shuffle">
                <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
            </svg>
        </div>
    )
}

export default PlayerBlock
