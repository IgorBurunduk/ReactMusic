import classNames from 'classnames'
import s from '../../css/player.module.css'

function VolumeBlock(props) {
    const volumeBlockClasses = classNames({
        volume: true,
        [`${props.addClass}`]: props.addClass,
    })

    return (
        <div className={volumeBlockClasses}>
            <div className={s.volume_content}>
                <VolumeImage />
                <VolumeProgress />
            </div>
        </div>
    )
}

function VolumeImage() {
    return (
        <div className={s.volume_image}>
            <svg className={s.volume_svg} alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume" />
            </svg>
        </div>
    )
}

function VolumeProgress() {
    const progressClasses = classNames([s.volume_progress, '_btn'])
    const lineClasses = classNames([s.volume_progress_line, '_btn'])

    return (
        <div className={progressClasses}>
            <input className={lineClasses} type="range" name="range" />
        </div>
    )
}

export default VolumeBlock
