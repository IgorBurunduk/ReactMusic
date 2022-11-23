import './track-play.css'
import { useEffect, useState } from 'react'
import Skeleton from '../skeleton/skeleton'

function TrackPlay(props) {
  let classes = props.addClass ? `track-play loading ${props.addClass}` : `track-play loading `

  const [elClass, setElClass] = useState(classes)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoad(!load)
      classes = classes.replace('loading ', ' ')
      setElClass(classes)
    }, 5000)
    return () => {
      clearTimeout(loadingTimer)
    }
  }, [])

  return (<div className={elClass}>
    {load ? <div className='track-play__contain'>
      <TrackImage />
      <TrackAuthor />
      <TrackAlbum />
    </div> : <Skeleton elem='track' />}
    <div className='track-play__like-dis'>
      <TrackBtnLike />
      <TrackBtnDislike />
    </div>
  </div>)
}

function TrackBtnLike() {
  return (<div className='track-play__like _btn-icon'>
    <svg className='track-play__like-svg' alt='like'>
      <use xlinkHref='img/icon/sprite.svg#icon-like' />
    </svg>
  </div>)
}

function TrackBtnDislike() {
  return (<div className='track-play__dislike _btn-icon'>
    <svg className='track-play__dislike-svg' alt='dislike'>
      <use xlinkHref='img/icon/sprite.svg#icon-dislike' />
    </svg>
  </div>)
}

function TrackImage() {
  return (<div className='track-play__image'>
    <svg className='track-play__svg' alt='music'>
      <use xlinkHref='img/icon/sprite.svg#icon-note' />
    </svg>
  </div>)
}

function TrackAuthor() {
  return (<div className='track-play__author'>
    <a className='track-play__author-link' href='https://'>Ты та...</a>
  </div>)
}

function TrackAlbum() {
  return (<div className='track-play__album'>
    <a className='track-play__album-link' href='https://'>Баста</a>
  </div>)
}

export default TrackPlay