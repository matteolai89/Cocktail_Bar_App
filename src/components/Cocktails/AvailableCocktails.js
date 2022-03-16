import CocktailItems from "./CocktailItems/CocktailItems";

import strawberry from "../../assets/strawberry_1.jpg";
import milk from "../../assets/milk_1.jpg";
import pomegranate from "../../assets/pomegranate_1.jpg";
import orange from "../../assets/orange_1.jpg";
import classes from "./AvailableCocktails.module.css";

const DUMMY_DATA = [
  {
    id: "m1",
    name: "Strawberry Vodka Champagne",
    description:
      "The strawberry vodka Champagne cocktail uses premium vodka along with three muddled strawberries and a hint of syrup and lemon. Served in a sugar-rimming glass with a strawberry garnish, it's an elegant bubbly cocktail.",
    price: 16.5,
    img: strawberry,
  },
  {
    id: "m2",
    name: "Half-and-Half Cocktails",
    description:
      "Some drink recipes call specifically for half-and-half. Traditionally, it is half cream and half milk, though modern standards do not adhere to this exact ratio. Half-and-half adds a richness to drinks that milk cannot, but it is lighter than even the lightest creams, so it's a perfect balance.",
    price: 18.5,
    img: milk,
  },
  {
    id: "m3",
    name: "Pomegranate Margarita",
    description:
      "This is no one-dimensional pomegranate margarita. It pairs the sweet, juicy arils (the fruit's seeds) with passion fruit juice. Using reposado tequila gives it a lovely oak background and there's no need to pull out the blender. Just grab your cocktail shaker and mix it up!",
    price: 12.5,
    img: pomegranate,
  },
  {
    id: "m4",
    name: "Abbey Cocktail",
    description:
      "The love for orange juice in cocktails is not strictly a modern trend. The citrus fruit had a place in the bar since the early 1900s, making an appearance in brilliant drinks like the abbey cocktail. This gin martini showcases the juice equally with Lillet Blanc, adding orange bitters for a nice accent. It's another ideal brunch cocktail.",
    price: 10.5,
    img: orange,
  },
];

const AvailableCocktails = () => {
  const cocktailsList = DUMMY_DATA.map((cocktail) => (
    <CocktailItems
      key={cocktail.id}
      id={cocktail.id}
      name={cocktail.name}
      description={cocktail.description}
      price={cocktail.price}
      img={cocktail.img}
    />
  ));

  return <div className={classes.cocktails}>{cocktailsList}</div>;
};

export default AvailableCocktails;
