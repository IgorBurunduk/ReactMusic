import './bar.css'
import PlayerBlock from '../player/player'
import VolumeBlock from '../volume/volume'

function BarBlock() {
    return (<div className='bar'>
        <div className='bar__content'>
            <div className='bar__player-progress' />
            <div className='bar__player-block'>
                <PlayerBlock addClass='bar__player' />
                <VolumeBlock addClass='bar__volume-block' />
            </div>
        </div>
    </div>)
}

export default BarBlock