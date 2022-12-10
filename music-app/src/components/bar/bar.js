import s from '../../css/bar.module.css'
import PlayerBlock from '../player/player'
import VolumeBlock from '../volume/volume'

function BarBlock() {
    return (
        <div className={s.bar}>
            <div className={s.content}>
                <div className={s.player_progress} />
                <div className={s.player_block}>
                    <PlayerBlock addClass={s.player} />
                    <VolumeBlock addClass={s.volume_block} />
                </div>
            </div>
        </div>
    )
}

export default BarBlock
