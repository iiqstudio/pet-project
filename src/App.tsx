import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login-page";
import BoardPage from "./pages/board-page";
import BoardsPage from "./pages/boards-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/boards" element={<BoardsPage />} />
      <Route path="/boards/:boardId" element={<BoardPage />} />
    </Routes>
  );
}

export default App;
