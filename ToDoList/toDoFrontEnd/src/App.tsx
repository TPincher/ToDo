import React, { useEffect, useState } from "react";
import "./App.css";
import { getAllTasks } from "./services/task-services.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    getAllTasks()
      .then((data) => console.log(data))
      .catch((e) => console.warn(e.message));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
