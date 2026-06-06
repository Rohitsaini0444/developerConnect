import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} >
        <Route path="/login" element={<Login />} /> 
        <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
