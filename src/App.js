import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Card from "./components/Card"
import Error404 from "./components/Error404";
import { Route, Switch } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <>
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Card/:id" component={Card} />
        <Route path="*" component={Error404} />
      </Switch>
    </>
  );
}

export default App;
