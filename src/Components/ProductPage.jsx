import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full  object-cover mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-gray-700 mb-4">{product.price}</p>
      <div className="flex justify-center space-x-4">
        <a
          href={`/buy/${product.id}`}
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
        >
          Buy Now
        </a>
        <Link
          to={`/ar-visualize?product=${encodeURIComponent(product.image)}`}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Visualize in AR
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
