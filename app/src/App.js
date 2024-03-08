import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/navbar"
import Header from "./Components/header"
import Form from "./Components/Form"

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Header></Header>
     <Form></Form>
     
    </div>
  );
}

export default App;
