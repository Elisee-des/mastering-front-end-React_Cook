import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from './components/Card';

const App = () => {

  const [mealsData, setMealsData] = useState([])

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => setMealsData(res.data.meals))
  }, [])

  return (
    <dvi className="app-container">
      <h1>React Cooking App</h1>
      <input type="text" placeholder="Tapez le nom d'un aliment(en anglais)" />
      <div className="meals container">
        {
          mealsData.map((meal) => (<Card key={meal.idMeal} meal={meal}/>))
        }
      </div>
    </dvi>
  );
};

export default App;