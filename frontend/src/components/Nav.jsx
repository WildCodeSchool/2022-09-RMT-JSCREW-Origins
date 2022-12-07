import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Category">Categorie</Link>
        </li>
        <li>
          <Link to="/Setting">Setting</Link>
        </li>
        <li>
          <Link to="/Slider">Slider</Link>
        </li>
        <li>
          <Link to="/Video">Video</Link>
        </li>
      </ul>
    </nav>
  );
}
