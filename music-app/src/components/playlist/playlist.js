import {useEffect, useState} from 'react';
import './playlist.css'
import TrackBlock from '../track/track'
import Skeleton from '../skeleton/skeleton';


const allTracks = [
  {
    track: {
      name: 'Guilt',
      time: '4:44',
      link: 'https://',
      typeSong: ''
    },
    author: {
      name: 'Nero',
      link: 'https://'
    },
    album: {
      name: 'Welcome Reality',
      link: 'https://'
    }
  },
  {
    track: {
      name: 'Elektro',
      time: '2:22',
      link: 'https://',
      typeSong: ''
    },
    author: {
      name: 'Dynoro, Outwork, Mr. Gee',
      link: 'https://'
    },
    album: {
      name: 'Elektro',
      link: 'https://'
    }
  },
  {
    track: {
      name: 'I’m Fire',
      time: '2:22',
      link: 'https://',
      typeSong: ''
    },
    author: {
      name: 'Ali Bakgor',
      link: 'https://'
    },
    album: {
      name: 'I’m Fire',
      link: 'https://'
    }
  },
  {
    track: {
      name: 'Non Stop',
      time: '4:12',
      link: 'https://',
      typeSong: '(Remix)'
    },
    author: {
      name: 'Стоункат, Psychopath',
      link: 'https://'
    },
    album: {
      name: 'Non Stop',
      link: 'https://'
    }
  },
  {
    track: {
      name: 'Run Run',
      time: '2:54',
      link: 'https://',
      typeSong: '(feat. AR/CO)'
    },
    author: {
      name: 'Jaded, Will Clarke, AR/CO',
      link: 'https://'
    },
    album: {
      name: 'Run Run',
      link: 'https://'
    }
  }
]


function PlaylistBlock(props) {
  let classes = props.addClass ? `playlist loading ${props.addClass}` : `playlist loading `

  const [elClass, setElClass] = useState(classes);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoad(!load)
      classes = classes.replace('loading ', ' ')
      setElClass(classes)
    }, 5000)
    return () => {
      clearTimeout(loadingTimer)
    }
  }, []);


  return (
    <div className={elClass}>
      {load
        ?
        allTracks.map((item) => <PlaylistItem key={item.track.name} track={item.track} author={item.author}
                                              album={item.album}/>)
        :
        <div>
          <Skeleton elem="playlist"/>
          <Skeleton elem="playlist"/>
          <Skeleton elem="playlist"/>
          <Skeleton elem="playlist"/>
          <Skeleton elem="playlist"/>
          <Skeleton elem="playlist"/>
        </div>

      }
    </div>
  )
}

function PlaylistItem(props) {
  return (
    <div className="playlist__item">
      <TrackBlock
        addClass="playlist__track"
        track={props.track}
        author={props.author}
        album={props.album}
      />
    </div>
  )
}

export default PlaylistBlock
