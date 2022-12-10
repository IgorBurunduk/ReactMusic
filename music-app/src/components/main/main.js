import s from '../../css/main.module.css'
import NavBlock from '../nav/nav'
import Centerblock from '../centerblock/centerblock'
import SidebarBlock from '../sidebar/sidebar'

function MainBlock() {
    return (
        <main className={s.main}>
            <NavBlock addClass={s.nav} />
            <Centerblock addClass={s.centerblock} />
            <SidebarBlock addClass={s.sidebar} />
        </main>
    )
}

export default MainBlock
