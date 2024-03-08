import { useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoriesContextProvider from "./context/CategoriesContext.js";
import { getAllCategories } from "./services/category-services.js";
import TasksPage from "./pages/TasksPage.js";
import NewTasksPage from "./pages/NewTasksPage.js";
import StatusContextProvider from "./context/StatusContext.js";
import { getAllStatuses } from "./services/status-services.js";
import CategoriesPage from "./pages/CategoriesPage.js";
import LandingPage from "./pages/LandingPage.js";
import EditPage from "./pages/EditPage.js";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    getAllCategories().catch((e) => console.warn(e.message));
  }, []);

  useEffect(() => {
    getAllStatuses().catch((e) => console.warn(e.message));
  }, []);

  return (
    <StatusContextProvider>
      <CategoriesContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/new" element={<NewTasksPage />} />
            <Route path="/tasks/categories" element={<CategoriesPage />} />
            <Route path="/tasks/edit" element={<EditPage />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="bottom-center"
          autoClose={1000}
          hideProgressBar={true}
        />
      </CategoriesContextProvider>
    </StatusContextProvider>
  );
}

export default App;
