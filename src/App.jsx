import {useNavigate, useHref, Routes, Route} from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import HomePage from "./pages/HomePage.jsx";
import ProductoPage from "./pages/ProductoPage";
import GridPage from "./pages/GridPage.jsx";
import NextGrid from "./components/NextGrid.jsx";
import CarCatalog from "./pages/CarCatalog.jsx";

function App() {

  const navigate = useNavigate();
  
  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarCatalog />} />
        <Route path="/grid" element={<GridPage />} /> 
        <Route path="/nextGrid" element={<NextGrid />} /> 
        {/* ... */}
      </Routes>
    </NextUIProvider>
  )
}

export default App
