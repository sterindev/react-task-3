
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import Homepage from "./pages/HomePage";

import MoviePage from "./pages/MoviePage";

import './styles/styles.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component ={Homepage} />
        <Route path="/movies/:id" Component ={MoviePage} /> 
      </Routes>
    </Router>
   
  );
}

export default App;
