import React, { createContext, useContext, useState } from 'react';
import type { Filters } from '../models/Filters';
import type { FilterContextProps } from '../models/FilterContextProps';


const defaultFilters: Filters = {
  category: 'Todas',
  minPrice: 0,
  maxPrice: 1000,
  onlyAvailable: false,
};

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = (): FilterContextProps => {
  const context = useContext(FilterContext);
  if (!context) throw new Error('useFilters debe usarse dentro de un FilterProvider');
  return context;
};
