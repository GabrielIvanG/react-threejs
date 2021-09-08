import './App.css';
import LogoRender from './components/LogoRender';

function App() {
  return (
    <div className="App">
      <section className="section1">
        <div className="mainText">
          <h1>Belliads</h1>
          <div className="separator"></div>
          <h3>Desarrollo web y Publicidad</h3>
        </div>
        <div className="render">
          <LogoRender />
        </div>
      </section>
      <section className="section2">
        <h1>Test</h1>
      </section>
    </div>
  );
}

export default App;
