import React from "react";
import MealsSummery from "./MealsSummery";
import AvailableMeals from "./AvailableMeals";
const Meals =(props)=>{
    return(
        <React.Fragment>
            <MealsSummery></MealsSummery>
            <AvailableMeals></AvailableMeals>
        </React.Fragment>

    )
}
export default Meals;