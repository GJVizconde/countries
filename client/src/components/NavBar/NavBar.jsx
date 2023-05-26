import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <Link className={style.home} to="/home">
        HOME
      </Link>
      <Link className={style.create} to="/create">
        CREATE ACTIVITY
      </Link>
    </div>
  );
};

export default NavBar;
