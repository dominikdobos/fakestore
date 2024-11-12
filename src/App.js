import Admin from "./pages/Admin.js";
import Public from "./pages/Public.js";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <header></header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="public" element={<Public />} />
              <Route path="admin" element={<Admin />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
