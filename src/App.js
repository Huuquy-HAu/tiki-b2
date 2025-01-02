
import "antd/dist/antd.css";
import { Routes,BrowserRouter,Route } from "react-router-dom";
import "./App.css";
import AddItem from "./page/shop/productManagement/priceItem/addItem_Phu/AddItem";
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            
            <Route path="/addItem" element={<AddItem/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
