import logo from './logo.svg';
import './App.css';
import Top from './Components/Top';
import Intro from './Components/Intro';
import EmailButton from './Components/EmailButton';
import About from './Components/About';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import TopNav from './Components/TopNav';
import Advert from './Components/Advert';
import Card from './Components/Card';
import JokesData from "./Components/JokesData"
import Jokes from './Components/Jokes';

function App() {
  
  return (
    <div className="App">
      {/** First Part Project
       *  <Top/>
       *   <Intro/>
       * <EmailButton/>
       * <About/>
       *   <Blog/>
       *  <Footer/>
       */}

      
       <TopNav/>
       <Advert/>
       <Card photo="img-2.png" name="USA" price="19" currency="$" 
       state="Sold" salesman="Sam Mureithi"/>
       <Card img="./PC tech clean.png" name="Kenya" price="1900" currency="Kes" 
       state="Online" salesman="Simon Nderitu"/>
       <Card img="./PC tech clean.png" name="Uganda" price="2900" currency="UG" 
       state="On Sale" salesman="Richard Githamari"/>
           <Card img=".\Components\Img1.jpg" name="USA" price="19" currency="$" 
       state="Sold" salesman="Sam Mureithi"/>
       <Card img="./PC tech clean.png" name="Kenya" price="1900" currency="Kes" 
       state="Online" salesman="Simon Nderitu"/>
       <Card img="./PC tech clean.png" name="Uganda" price="2900" currency="UG" 
       state="On Sale" salesman="Richard Githamari"/>
           <Card img=".\Components\Img1.jpg" name="USA" price="19" currency="$" 
       state="Sold" salesman="Sam Mureithi"/>
       <Card img="./PC tech clean.png" name="Kenya" price="1900" currency="Kes" 
       state="Online" salesman="Simon Nderitu"/>
       <Card img="./PC tech clean.png" name="Uganda" price="2900" currency="UG" 
       state="On Sale" salesman="Richard Githamari"/>
           <Card img=".\Components\Img1.jpg" name="USA" price="19" currency="$" 
       state="Sold" salesman="Sam Mureithi"/>
       <Card img="./PC tech clean.png" name="Kenya" price="1900" currency="Kes" 
       state="Online" salesman="Simon Nderitu"/>
       <Card img="./PC tech clean.png" name="Uganda" price="2900" currency="UG" 
       state="On Sale" salesman="Richard Githamari"/>
           <Card img=".\Components\Img1.jpg" name="USA" price="19" currency="$" 
       state="Sold" salesman="Sam Mureithi"/>
       <Card img="./PC tech clean.png" name="Kenya" price="1900" currency="Kes" 
       state="Online" salesman="Simon Nderitu"/>
       <Card img="./PC tech clean.png" name="Uganda" price="2900" currency="UG" 
       state="On Sale" salesman="Richard Githamari"/>
        <Card img=".\Components\Img1.jpg" name="USA" price="19" currency="$" 
       state="Sold" salesman="Sam Mureithi"/>
      

 
    </div>
  );
}

export default App;
