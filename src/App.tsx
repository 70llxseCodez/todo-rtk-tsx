import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import CartPage from "./pages/cart/CartPage";
import CrossedPage from "./pages/crossed/CrossedPage";
import HomePage from "./pages/home/HomePage";


function App() {
  return (
    <div className="App">
        <Header/>
      <div className="container">
        <Routes>
            <Route path="/done" element={<CrossedPage/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
