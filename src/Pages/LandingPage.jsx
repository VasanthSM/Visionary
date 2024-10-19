import ProductCard from "../Components/ProductPage";

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

const LandingPage = () => {
  return (
    <div className="bg-white">
      <section className="relative py-20">
        <div className="absolute inset-0">
          {/* SVG Background */}
          <svg className="h-full w-full" viewBox="0 0 1440 320">
            <path fill="#3AB0A0" fillOpacity="0.4" d="M0,320L30,293.3C60,267,120,213,180,192C240,171,300,185,360,181.3C420,177,480,155,540,128C600,101,660,75,720,90.7C780,107,840,165,900,186.7C960,208,1020,192,1080,176C1140,160,1200,144,1260,160C1320,176,1380,224,1410,248L1440,273L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
          </svg>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold m-4 text-gray-800">Welcome to Lenskart Clone</h1>
          <p className="text-xl m-5 text-gray-800">Discover the perfect eyewear that fits your style and needs.</p>
          <a
            href="#featured"
            className="bg-white text-teal-600 text-lg px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-200 transition duration-300 transform hover:-translate-y-1"
          >
            Shop Now
          </a>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-8 px-6">
            At Lenskart Clone, we offer a wide variety of stylish glasses and
            sunglasses that combine quality with affordability. Our mission is
            to help you find the perfect pair that enhances your vision and
            complements your style.
          </p>
          <a
            href="#featured"
            className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition duration-300 transform hover:-translate-y-1"
          >
            Explore Our Collection
          </a>
        </div>
      </section>

      <section id="featured" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-black">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
