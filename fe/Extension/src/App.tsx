import { ToastContainer } from "react-toastify";

import { Search } from "./View/Search";

export function App() {
  return (
    <div className="p-4 w-[450px]">
      <ToastContainer />
      <Search />
    </div>
  );
}
