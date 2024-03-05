import { useEffect, useState } from "react";
import "./App.css";
import { getAllTasks } from "./services/task-services.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoriesContextProvider from "./context/CategoriesContext.js";
import { getAllCategories } from "./services/category-services.js";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    getAllTasks();
    getAllCategories()
      .then((data) => console.log(data))
      .catch((e) => console.warn(e.message));
  }, []);

  return (
    <CategoriesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
        </Routes>
      </BrowserRouter>
    </CategoriesContextProvider>
  );
}

export default App;
