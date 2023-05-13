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

  return (
    <div className="App">
      <NavBar />
      <Container>
        <Header />
        <Tags />
        <MenuList meals={mealsData} />
      </Container>
    </div>
  );
}

export default App;
