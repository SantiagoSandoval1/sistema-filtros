import React from "react";
import { useFilters } from "../contexts/FilterContext";
import type { Category } from "../models/Category";

const categories: (Category | "Todas")[] = [
  "Todas",
  "Electrónica",
  "Libros",
  "Ropa",
  "Hogar",
];

const FilterPanel: React.FC = () => {
  const { filters, setFilters } = useFilters();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;

    setFilters({
      ...filters,
      [name]:
        type === "checkbox"
          ? (target as HTMLInputElement).checked
          : name === "minPrice" || name === "maxPrice"
          ? Number(value)
          : value,
    });
  };

  return (
    <div className="filtros-contenedor">
      <div className="filtros">
        <div className="filtro">
          <label htmlFor="categoria">Categoría:</label>
          <select
            id="category"
            name="category"
            value={filters.category}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="filtro">
          <label htmlFor="precio">Precio Minimo:</label>
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
          />
        </div>

        <div className="filtro">
          <label htmlFor="precio">Precio Maximo:</label>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
          />
        </div>

        <div className="filtro">
          <label>
            <input
              type="checkbox"
              id="onlyAvailable"
              name="onlyAvailable"
              checked={filters.onlyAvailable}
              onChange={handleChange}
            />
            Mostrar solo disponibles
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
