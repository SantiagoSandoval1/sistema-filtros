import React from "react";
import { FilterProvider } from "./contexts/FilterContext";
import FilterPanel from "./components/FilterPanel";
import ProductList from "./components/ProductList";
import "./App.css";

const App: React.FC = () => {
  return (
    <FilterProvider>
      <div className="catalogo-container">
        <h1>Sistema de Filtros</h1>
        <FilterPanel />
        <ProductList />
      </div>
    </FilterProvider>
  );
};

export default App;
