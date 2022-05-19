import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Page404 from "./components/Page404";


export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/Blog" element={<App/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>  
    </BrowserRouter>
  );
}
