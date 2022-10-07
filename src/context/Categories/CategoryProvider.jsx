import React, { createContext, useReducer } from "react";
import { categories } from "../../db";
import categoryReducer from "./category.reducer";

export const CategoryContext = createContext({
  categoryList: [],
  categoryDispatch: () => {},
});
const CategoryProvider = ({ children }) => {
  const [categoryList, categoryDispatch] = useReducer(
    categoryReducer,
    categories
  );
  return (
    <CategoryContext.Provider
      value={{
        categoryList,
        categoryDispatch,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
