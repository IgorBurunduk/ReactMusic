import '../../css/player.module.css'
import classNames from 'classnames'

function VolumeBlock(props) {
    const volumeBlockClasses = classNames({
        volume: true,
        [`${props.addClass}`]: props.addClass,
    })

    return (
        <div className={volumeBlockClasses}>
            <div className="volume__content">
                <VolumeImage />
                <VolumeProgress />
            </div>
        </div>
    )
}

function VolumeImage() {
    return (
        <div className="volume__image">
            <svg className="volume__svg" alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume" />
            </svg>
        </div>
    )
}

function VolumeProgress() {
    return (
        <div className="volume__progress _btn">
            <input
                className="volume__progress-line _btn"
                type="range"
                name="range"
            />
        </div>
    )
}

export default VolumeBlock
