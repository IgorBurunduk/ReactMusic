import './main.css'
import NavBlock from '../nav/nav'
import CenterBlock from '../centerBlock/centerBlock'
import SidebarBlock from '../sidebar/sidebar'

function MainBlock() {
  return (
    <main className='main'>
      <NavBlock addClass='main__nav' />
      <CenterBlock addClass='main__centerblock' />
      <SidebarBlock addClass='main__sidebar' />
    </main>
  )
}

export default MainBlock
