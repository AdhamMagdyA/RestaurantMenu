import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";
import Header from "./components/header";
import Tags from "./components/tags";
import MenuList from "./components/menu_list";
import { meals } from "./data";
import { useState } from "react";

function App() {
  const [mealsData, setMealsData] = useState(meals);

  // get the unique tags
  const tags = [...new Set(meals.map((meal) => meal.tag))];

  //filter by tag function
  const filterByTag = (tag) => {
    const filteredMeals = meals.filter((meal) => meal.tag === tag);
    setMealsData(filteredMeals);
  };

  // remove tag filters
  const removeFilters = () => {
    setMealsData(meals);
  };

  // filter by search bar
  const filterBySearch = (search) => {
    const filteredMeals = meals.filter((meal) => meal.name.includes(search));
    setMealsData(filteredMeals);
  };

  return (
    <div className="App">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Tags
          tags={tags}
          filterMenu={filterByTag}
          removeFilters={removeFilters}
        />
        <MenuList meals={mealsData} />
      </Container>
    </div>
  );
}

export default App;
