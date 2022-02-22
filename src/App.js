import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Content from './Components/SectionA';
import ContentB from './Components/SectionB';
import Article from './Components/SectionC';
import About from './Components/About';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <ContentB/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
