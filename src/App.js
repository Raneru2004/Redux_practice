import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UserPost from './UserPost/index'
import CreatePost from "./UserPost/Create";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Understand Redux Toolkit Using API</h2>
        <Routes>
          <Route path="/"  element={<UserPost/>} />
          <Route path="/create"  element={<CreatePost/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;