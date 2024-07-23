/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const ProductCard = ({ product, loading }) => {
  const { addItemToCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (currentUser) {
      addItemToCart(product);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="card w-full bg-white shadow-xl mx-auto">
      <figure className="p-1">
        {loading ? (
          <div className="skeleton w-full h-96 bg-gray-200 animate-pulse"></div>
        ) : (
          <Link to={`/product/${product.id}`}>
            <img className="border-0" src={product.imageUrl} alt={product.name} />
          </Link>
        )}
      </figure>
      <div className="card-body">
        {loading ? (
          <>
            <div className="skeleton w-full h-5 bg-gray-200 animate-pulse mb-2"></div>
            <div className="skeleton w-1/4 h-4 bg-gray-200 animate-pulse"></div>
            <div className="skeleton w-1/6 h-4 bg-gray-200 animate-pulse flex self-end"></div>
          </>
        ) : (
          <>
            <h2 className="card-title text-dark-blue-400">
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </h2>
            <p>{product.category}</p>
            <div className="card-actions justify-between items-center">
              <span className="text-xl font-bold">${Number(product.price).toFixed(2)}</span>
              <button onClick={handleAddToCart} className="btn btn-primary">
                Add to Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;