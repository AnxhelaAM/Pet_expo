import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Card from './components/CardData/Card'; 
import OurStory from './components/OurStory/OurStory';
import OurTeam from './components/OurTeam/OurTeam';
import Attend from './components/Attend/Attend';
import LogOut from './components/LogOut/LogOut';
import ContactUs from './components/ContactsUs/ContactsUs';
import DogExhibit from './components/Exhibit/DogExhibit';
import CatExhibit from './components/Exhibit/CatExhibit';
import BirdExhibit from './components/Exhibit/BirdExhibit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about/our-story' element={<OurStory />} />
          <Route path='/about/our-team' element={<OurTeam />} />
          <Route path='/attend' element={<Attend />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/logout' element={<LogOut />} />
          <Route path='/exhibition/dogs' element={<DogExhibit />} /> 
          <Route path='/exhibition/cats' element={<CatExhibit />} />
          <Route path='/exhibition/birds' element={<BirdExhibit />} />
          <Route path='/animals/:animal' element={<Card />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
