import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Header } from "../View/layouts/Header.tsx";
import { Home } from "../View/pages/Home";
import { Search } from "../View/pages/Search/index.tsx";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
