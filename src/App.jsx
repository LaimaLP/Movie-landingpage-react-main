// import logo from './logo.svg';
import "./App.css";
import { Header } from "./components/header/Header";
import { Sections } from "./components/Main/sections/Sections";
import { Questions } from "./components/Main/questions/Questions";
import { Footer } from "./components/footer/Footer";
import { PhoneGifCombo } from "./components/Main/sections/PhoneGifCombo";


function App() {
  return (
    <div>
      <Header />
      <Sections />
     
      <Questions />
      
      <Footer/>
   
    </div>
  );
}

export default App;
