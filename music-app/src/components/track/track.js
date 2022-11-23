import './track.css'

function TrackBlock(props) {
    let classes = 'track '
    if (props.addClass) {
        classes += props.addClass
    }

    return (<div className={classes}>
        <TrackTitle link={props.track.link} type={props.track.typeSong} name={props.track.name} />
        <TrackAuthor link={props.author.link} name={props.author.name} />
        <TrackAlbum link={props.album.link} name={props.album.name} />
        <TrackTime time={props.track.time} />
    </div>)
}

function TrackTitle(props) {
    return (<div className='track__title'>
        <div className='track__title-image'>
            <svg className='track__title-svg' alt='music'>
                <use xlinkHref='img/icon/sprite.svg#icon-note' />
            </svg>
        </div>
        <div className='track__title-text'>
            <a className='track__title-link' href={props.link}>{props.name} <span
                className='track__title-span'>{props.typeSong}</span></a>
        </div>
    </div>)
}

function TrackAuthor(props) {
    return (<div className='track__author'>
        <a className='track__author-link' href={props.link}>{props.name}</a>
    </div>)
}

function TrackAlbum(props) {
    return (<div className='track__album'>
        <a className='track__album-link' href={props.link}>{props.name}</a>
    </div>)
}

function TrackTime(props) {
    return (<div className='track__time'>
        <svg className='track__time-svg' alt='time'>
            <use xlinkHref='img/icon/sprite.svg#icon-like' />
        </svg>
        <span className='track__time-text'>{props.time}</span>
    </div>)
}

export default TrackBlock