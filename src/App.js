import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Header />
      </Container>
    </div>
  );
}

export default App;
