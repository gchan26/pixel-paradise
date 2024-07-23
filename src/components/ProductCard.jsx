/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ProductCard = ({ product, loading }) => (
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
          <div className="card-actions justify-end">
            <span className="text-xl font-bold">${product.price}</span>
          </div>
        </>
      )}
    </div>
  </div>
);

export default ProductCard;