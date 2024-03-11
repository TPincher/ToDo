import { createContext, useEffect, useState, ReactNode } from "react";
import { getAllCategories } from "../services/category-services";
import { CategoryItem } from "../services/category-services";

interface CategoriesContextProps {
  children: ReactNode;
}

interface CategoriesContextValue {
  categories: CategoryItem[];
  setCategories: (categories: CategoryItem[]) => void;
}

export const CategoriesContext = createContext<CategoriesContextValue | null>(
  null
);

const CategoriesContextProvider = ({ children }: CategoriesContextProps) => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);

  useEffect(() => {
    getAllCategories()
      .then((categories) => setCategories(categories))
      .catch(console.warn);
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContextProvider;
