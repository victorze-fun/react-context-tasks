import { Route, Routes } from "react-router-dom";

import { Heading } from "./components/Heading";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { ContextProvider } from "./context/GlobalContext";
import "./App.css";

export const App = () => {
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <Heading />
            <Routes>
              <Route path="/" element={<TaskList />}></Route>
              <Route path="/add" element={<TaskForm />}></Route>
              <Route path="/edit/:id" element={<TaskForm />}></Route>
            </Routes>
          </ContextProvider>
        </div>
      </div>
    </div>
  );
};
