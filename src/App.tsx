import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login-page";

function BoardPage() {
  return <h1>BoardPage</h1>;
}

function BoardsPage() {
  return <h1>BoardPage</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/boards" element={<BoardPage />} />
      <Route path="/boards/:boardId" element={<BoardsPage />} />
    </Routes>
  );
}

export default App;
