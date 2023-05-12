import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";
import Header from "./components/header";
import Tags from "./components/tags";
import MealCard from "./components/mealCard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Header />
        <Tags />
      </Container>
    </div>
  );
}

export default App;
