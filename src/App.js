import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home-component";
import Signin from "./pages/Signin";
import "./App.css";


const App = () => {

  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Route>
    </Routes>
  );


};

export default App;

