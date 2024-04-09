import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PagesAnimes from './Pages/PagesAnimes';
import PagesDetailsCards from './Pages/PagesDetailsCards';
import Container from 'react-bootstrap/Container';
import PagesPrincipale from './Pages/PagesPrincipale';
import PagesTVshows from './Pages/PagesTVshows';
import PagesFilms from './Pages/PagesFilms';
import PagesSeries from './Pages/PagesSeries';
import Footer from './Components/Footer';


function App() {
  return <>
      <BrowserRouter>
        <NavBar/>
            <Routes>
              <Route path="/films" element={<PagesFilms/>} />
              <Route path="/series" element={<PagesSeries/>} />
              <Route path='/animes' element={<PagesAnimes/>} />
              <Route path='/tvshows' element={<PagesTVshows/>} />
              <Route path='/detailscards' element={<PagesDetailsCards/>} />
              <Route path='/accueil' element={<PagesPrincipale/>} />
            </Routes>
          <Footer />
    </BrowserRouter>
  </>
}

export default App;
