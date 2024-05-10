import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'biryani',
    description: 'hyderabadi special',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'idli vada',
    description: 'A south indian specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) =>(
  <MealItem 
  key={meal.id}
  id={meal.id} // Pass the id prop here
  name={meal.name}
  description={meal.description}
  price={meal.price}
  />
  ));
  //<li>{meal.name}</li>)
  //here we wre returning meal name for every meal item,see above code we are directly using 
  //mealitem to render these to meal item by sending key,name ,des,price etc.
  


  return (
    <section className={classes.meals}>
      <Card>
      <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;