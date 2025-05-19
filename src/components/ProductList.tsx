import React from 'react';
import { useFilters } from '../contexts/FilterContext';
import type { Product } from '../models/Product';

const allProducts: Product[] = [
  { id: 1, name: 'Laptop', category: 'Electrónica', price: 899, available: true },
  { id: 2, name: 'Libro de React', category: 'Libros', price: 29, available: true },
  { id: 3, name: 'Camiseta', category: 'Ropa', price: 19, available: false },
  { id: 4, name: 'Cafetera', category: 'Hogar', price: 59, available: true },
];

const ProductList: React.FC = () => {
  const { filters } = useFilters();

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = filters.category === 'Todas' || product.category === filters.category;
    const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const matchesAvailability = !filters.onlyAvailable || product.available;
    return matchesCategory && matchesPrice && matchesAvailability;
  });

  return (
    <>
      <div className="productos">
        {filteredProducts?.map((producto) => (
          <div className="producto" key={producto.id}>
            <div className="imagen">Imagen</div>
            <h3>{producto.name}</h3>
            <p>Categoría: {producto.category}</p>
            <p className="precio">{producto.price}€</p>
            {producto.available ? (
              <span className="etiqueta disponible">Disponible</span>
            ) : (
              <p className="etiqueta agotado">Agotado</p>
            )}
          </div>
        ))}
      </div>

      <p className="contador">Mostrando 3 de 8 productos</p>
    </>
  );
};

export default ProductList;
