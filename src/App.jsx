import './App.css';
// import Navbar from './components/Navbar';
import PageNav from './components/Navbar'
import Articles from './components/Articles';
import { Link, Route, Routes } from "react-router-dom";




function App() {
  return (
    <div className="content_wrapper">

      <PageNav></PageNav>
      <Articles></Articles>
    </div>
  );
}

export default App;
