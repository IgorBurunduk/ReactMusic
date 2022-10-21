import './container.css';
import Footer from '../footer/footer'
import MainBlock from '../main/main'
import BarBlock from '../bar/bar'


function AppContainer() {
  return (
    <div className="container">
      <MainBlock />
      <BarBlock />
      <Footer />
    </div>
  );
}

export default AppContainer;
