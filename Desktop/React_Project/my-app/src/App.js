import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"

function App() {
  let myVariable = 345; 
  return (
    <>
    <Header/>
    <Todos/>
    <Footer/>
    </>
  );
}

export default App;
