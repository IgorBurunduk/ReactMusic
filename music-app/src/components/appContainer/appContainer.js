import './appContainer.css'


function AppContainer({children}) {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default AppContainer
