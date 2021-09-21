import './App.css';
import LogoRender from './components/LogoRender';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Contact from './components/contact/Contact';
import ButtonNextPage from './components/utils/ButtonNextPage';

function App() {
  return (
    <div className="App" id="AppID">
      <Nav />
      <section id="sectionHome" className="section1">
        <div className="mainText">
          <h1>Belliads</h1>
          <div className="separator"></div>
          <h3>Desarrollo web y Publicidad</h3>
          <ButtonNextPage />
        </div>
        <div className="render">
          <LogoRender />
        </div>
      </section>
      <div id="navCont">
        <section id="sectionAbout" className="section2">
          <About />
        </section>
        <section id="sectionContact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
