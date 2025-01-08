import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Search } from "../View/pages/Search";
import { Header } from "../View/layouts/Header.tsx";
import { Home } from "../View/pages/Home";
import { List } from "../View/pages/List/index.tsx";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/search/:word" element={<Search />} />
          <Route path="/list" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
