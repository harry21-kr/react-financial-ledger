import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:listId" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
