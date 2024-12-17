import {useNavigate, useHref, Routes, Route} from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import HomePage from "./pages/HomePage.jsx";
import ProductoPage from "./pages/ProductoPage";

function App() {

  const navigate = useNavigate();
  
  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/producto/:id" element={<ProductoPage />} />
        {/* ... */}
      </Routes>
    </NextUIProvider>
  )
}

export default App
