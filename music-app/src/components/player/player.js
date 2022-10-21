import TrackPlay from '../track-play/track-play'
import './player.css'

function PlayerBlock(props) {
  let classes = 'player '
  if (props.addClass) {
    classes += props.addClass
  }

  return (
    <div className={classes}>
      <div className='player__controls'>
        <PlayerBtnPrev />
        <PlayerBtnPlay />
        <PlayerBtnNext />
        <PlayerBtnRepeat />
        <PlayerBtnShuffle />
      </div>
      <TrackPlay addClass='player__track-play' />
    </div>
  )
}

function PlayerBtnPrev() {
  return (
    <div className='player__btn-prev'>
      <svg className='player__btn-prev-svg' alt='prev'>
        <use xlinkHref='img/icon/sprite.svg#icon-prev' />
      </svg>
    </div>
  )
}

function PlayerBtnPlay() {
  return (
    <div className='player__btn-play _btn'>
      <svg className='player__btn-play-svg' alt='play'>
        <use xlinkHref='img/icon/sprite.svg#icon-play' />
      </svg>
    </div>
  )
}


function PlayerBtnNext() {
  return (
    <div className='player__btn-next'>
      <svg className='player__btn-next-svg' alt='next'>
        <use xlinkHref='img/icon/sprite.svg#icon-next' />
      </svg>
    </div>
  )
}

function PlayerBtnRepeat() {
  return (
    <div className='player__btn-repeat _btn-icon'>
      <svg className='player__btn-repeat-svg' alt='repeat'>
        <use xlinkHref='img/icon/sprite.svg#icon-repeat' />
      </svg>
    </div>
  )
}


function PlayerBtnShuffle() {
  return (
    <div className='player__btn-shuffle _btn-icon'>
      <svg className='player__btn-shuffle-svg' alt='shuffle'>
        <use xlinkHref='img/icon/sprite.svg#icon-shuffle' />
      </svg>
    </div>
  )
}

export default PlayerBlock
