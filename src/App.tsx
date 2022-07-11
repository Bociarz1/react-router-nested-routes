import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Company from "./components/Company";
import Ceo from "./components/Ceo";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="about" element={<About />}>
          {/* 3. Routing inside 'About' component*/}
          <Route path="company" element={<Company/>}/>
          <Route path="ceo" element={<Ceo/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
