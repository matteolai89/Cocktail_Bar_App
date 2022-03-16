import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import underwater from "../../assets/underwater.jpg";
import { Link } from "react-scroll";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 onClick={scrollToTop}>Evening View - Cocktail Bar</h1>
        <HeaderCartButton onClick={props.onShownCart} />
      </header>
      <div className={classes.div}>
        <img className={classes.img} src={underwater} alt="underwater"></img>
        <h2 className={classes.title}>Choose Your Favourite Cocktail</h2>
        <Link
          activeClass="active"
          to="scroll"
          spy={true}
          smooth={true}
          className={`${classes.section04} ${classes.demo}`}
        >
          <a href="#section05">
            <span></span>Scroll
          </a>
        </Link>
      </div>
    </Fragment>
  );
};

export default Header;
