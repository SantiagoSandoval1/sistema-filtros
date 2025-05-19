import type { Filters } from "./Filters";

export interface FilterContextProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}