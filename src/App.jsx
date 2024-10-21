import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import ContactPage from './Pages/Contact';
import ARPage from './Pages/ARPage';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ar" element={<ARPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
