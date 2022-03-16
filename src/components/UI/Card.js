import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div id="scroll" className={classes.card}>
      {props.children}
    </div>
  );
};

export default Card;
