import { Link } from "react-router-dom";
import '../App.css';

export default function Hee() {
  return (
    <div className="navbar">
      <nav >
        <Link className="navbar_text" to="/">Home</Link> |{" "}
        <Link className="navbar_text" to="about">About</Link>
      </nav>
    </div>
  );
}