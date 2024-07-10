import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products';
import ProductCard from '../../components/ProductCard';

const Products = () => {
  const { filterType, filterValue } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = products.filter(product => {
    if (filterType === 'type') {
      return product.type.toLowerCase() === filterValue.toLowerCase();
    }
    
    if (filterType === 'company') {
      return product.company.toLowerCase() === filterValue.toLowerCase();
    }

    if (filterType === 'category') {
      return product.category.toLowerCase() === filterValue.toLowerCase();
    }

    return true;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-center mx-auto xl:mx-40">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} loading={loading} />
        ))}
      </div>
    </div>
  );
}

export default Products;