import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./CocktailItems.module.css";
import CocktailItemsForm from "./CocktailItemsForm";
import Card from "../../UI/Card";

const CocktailItems = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <Card id="scroll">
      <div className={classes.container}>
        <img src={props.img} alt="cocktails" className={classes.image}></img>
        <div className={classes.overlay}>
          <CocktailItemsForm onAddToCart={addToCartHandler} />
          <h3 className={classes.title}>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
    </Card>
  );
};

export default CocktailItems;
