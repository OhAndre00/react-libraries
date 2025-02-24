import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/users">Github</Link>
    </nav>
  );
}
