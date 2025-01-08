import { ToastContainer } from "react-toastify";
import { Router } from "./Router";

export function App() {
  return (
    <div className="p-4">
      <ToastContainer />
      <Router />
    </div>
  );
}
