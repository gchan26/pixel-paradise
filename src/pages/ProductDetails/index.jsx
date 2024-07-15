import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto p-4 bg-gradient-to-r from-dark-blue-800 to-dark-blue-600 min-h-screen flex items-center">
      <div className="p-4 sm:p-8 flex flex-col items-center sm:flex-row max-w-3xl mx-auto bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <div className="p-4 sm:p-8">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full max-h-96 object-cover rounded-lg"
          />
        </div>
        <div className="p-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            {product.name}
          </h2>
          <p className="text-gray-600">
            {product.category}, {product.company}
          </p>
          <p className="text-3xl font-bold my-4">{product.price}</p>
          <button className="btn bg-light-blue-600 hover:bg-light-blue-700 min-w-52 w-full hover:text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
