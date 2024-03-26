import Styles from "./meals-grid.module.css"

import MealItem from "./meals-item"

export default function MealsGrid({meals}) {
  return (
    <ul className={Styles.meals}>
      {meals.map(meal => <li key={meal.id}>
        <MealItem {...meal} />
      </li>)}
    </ul>
  )
}