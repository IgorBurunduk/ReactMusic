import AppContainer from './components/appContainer/appContainer'
import MainBlock from './components/main/main'
import BarBlock from './components/bar/bar'
import Footer from './components/footer/footer'


function App() {
  return (
    <div className="wrapper">
      <AppContainer>
        <MainBlock />
        <BarBlock />
        <Footer />
      </AppContainer>
    </div>
  );
}

export default App;
