import './App.css';
import Header from './Components/Header';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
