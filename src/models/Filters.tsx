import type { Category } from "./Category";

export interface Filters {
  category: Category | 'Todas';
  minPrice: number;
  maxPrice: number;
  onlyAvailable: boolean;
}
