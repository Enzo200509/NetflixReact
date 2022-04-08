import "./app.css"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App = () => {
  return <div>
  <Router>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/watch" element={<Watch/>}></Route>
    </Routes>
  </Router>
  </div>
};

export default App;