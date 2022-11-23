import Container from './components/container/container'
import MainBlock from './components/main/main'
import BarBlock from './components/bar/bar'
import Footer from './components/footer/footer'

function App() {
    return (<div className='wrapper'>
        <Container>
            <MainBlock />
            <BarBlock />
            <Footer />
        </Container>
    </div>)
}

export default App