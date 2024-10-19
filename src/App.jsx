import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import ContactPage from './Pages/Contact';
import ARPage from './Pages/ARPage';
import Footer from './Components/Footer';

const products = [
  { id: 1, name: 'Stylish Glasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/black-gold-black-full-rim-round-john-jacobs-tr-flex-jj-e14410-c6-eyeglasses__dsc7005_20_06_2024.jpg', price: '$50' },
  { id: 2, name: 'Retro Glasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e13068-c6-eyeglasses_g_4836_03_03_2023.jpg', price: '$70' },
  { id: 3, name: 'Classic Glasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/copper-brown-full-rim-round-vincent-chase-sleek-steel-vc-e15069-c2-eyeglasses_g_3676_10_14_22.jpg', price: '$60' },
  { id: 4, name: 'Sunglasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-brown-gradient-full-rim-aviator-vincent-chase-polarized-vintage-vc-s11075-c11-sunglasses_g_3377_6_02_22.jpg', price: '$80' },
  { id: 5, name: 'Sports Goggles', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-blue-full-rim-round-vincent-chase-livewire-vc-s14505-c5-polarized-sunglasses_g_7702.jpg', price: '$90' },
  { id: 6, name: 'Blue Light Glasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-the-metal-edit-vc-s15765-c1-sunglasses_img_4726_24_01_2024.jpg', price: '$55' },
  { id: 7, name: 'Aviator Glasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/gunmetal-black-full-rim-rectangle-square-vincent-chase-the-metal-edit-vc-s13830-c2-polarized-sunglasses_vincent-chase-vc-s13830-c2-suglasses_suglasses_g_4417_2_5july23.jpg', price: '$75' },
  { id: 8, name: 'Round Frame Glasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s13137-c4-c4-sunglasses_g_8692.jpg', price: '$65' },
  { id: 9, name: 'Designer Glasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/black-grey-solid-full-rim-rectangle-square-vincent-chase-polarized-the-metal-edit-vc-s13118-c2-sunglasses_vincent-chase-vc-s13118-c2-sunglasses_sunglasses_g_7218_1_5july23.jpg', price: '$100' },
  { id: 10, name: 'Polarized Sunglasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/john-jacobs-jj-e14486-c4-eyeglasses_g_7955.jpg', price: '$85' },
  { id: 11, name: 'Vintage Glasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e13818-c2-eyeglasses_G_2399.jpg', price: '$95' },
  { id: 12, name: 'Cat-Eye Glasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/i/black-gold-full-rim-rectangle-john-jacobs-supreme-steel-jj-e11292-c5-eyeglasses_g_8039_9_02_22.jpg', price: '$78' },
  { id: 13, name: 'Square Frame Glasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e13069-c6-eyeglasses_210172_(2)_02_11_2023.jpg', price: '$60' },
  { id: 14, name: 'Mirrored Sunglasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//j/o/john-jacobs-jj-e11675-c1-eyeglasses_g_1122_2.jpg', price: '$120' },
  { id: 15, name: 'Kids Glasses', image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//h/i/kids-glasses:-black-black-grey-full-rim-wayfarer-kids-5-8-yrs-hooper-flexi-hooper-hp-e10003m-c9_g_5456_07_20_23.jpg', price: '$45' },
];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ar" element={<ARPage products={products} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
