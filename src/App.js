import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PagesDetailsCards from './Pages/PagesDetailsCards';
import PagesDernieresSorties from './Pages/PagesDernieresSorties';
import PagesTendance from './Pages/PagesTendance';
import PagesEmissionsTV from './Pages/PagesEmissionsTV';
import Footer from './Components/Footer';
import PagesAccueil from './Pages/PagesAccueil';
import PagesPopulaires from './Pages/PagesPopulaires';


function App() {
  return <>
      <BrowserRouter>
        <NavBar/>
            <Routes>
              <Route path="/accueil" element={<PagesAccueil/>} />
              <Route path="/tvshow" element={<PagesEmissionsTV/>} />
              <Route path="/toprated" element={<PagesPopulaires/>} />
              <Route path='/trends' element={<PagesTendance/>} />
              <Route path='/detailscards' element={<PagesDetailsCards/>} />
              <Route path='/latest' element={<PagesDernieresSorties/>} />
            </Routes>
          <Footer />
    </BrowserRouter>
  </>
}

export default App;
