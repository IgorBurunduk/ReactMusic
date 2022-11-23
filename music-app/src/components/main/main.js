import './main.css'
import NavBlock from '../nav/nav'
import Centerblock from '../centerblock/centerblock'
import SidebarBlock from '../sidebar/sidebar'

function MainBlock() {
  return (
    <main className='main'>
      <NavBlock addClass='main__nav' />
      <Centerblock addClass='main__centerblock' />
      <SidebarBlock addClass='main__sidebar' />
    </main>
  )
}

export default MainBlock
