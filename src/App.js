import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import PreviousWork from './components/PreviousWork';
import Contact from './components/Contact';



function App() {
  return (
    <>
    <Nav></Nav>
    
    <Cards></Cards>

    <PreviousWork></PreviousWork>

    <Contact></Contact>
    </>
  );
}

export default App;
