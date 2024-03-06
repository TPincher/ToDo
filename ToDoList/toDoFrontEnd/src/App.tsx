import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoriesContextProvider from "./context/CategoriesContext.js";
import { getAllCategories } from "./services/category-services.js";
import TasksPage from "./pages/TasksPage.js";
import NewTasksPage from "./pages/NewTasksPage.js";
import StatusContextProvider from "./context/StatusContext.js";
import { getAllStatuses } from "./services/status-services.js";

function App() {
  useEffect(() => {
    getAllCategories()
      .then((categoryData) => console.log(categoryData))
      .catch((e) => console.warn(e.message));
  }, []);

  useEffect(() => {
    getAllStatuses()
      .then((statusData) => console.log(statusData))
      .catch((e) => console.warn(e.message));
  }, []);

  return (
    <StatusContextProvider>
      <CategoriesContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Home page</h1>} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/new" element={<NewTasksPage />} />
            <Route path="/tasks/categories" element={<h1>Categories</h1>} />
          </Routes>
        </BrowserRouter>
      </CategoriesContextProvider>
    </StatusContextProvider>
  );
}

export default App;
