//CSS
import "./App.css";
//Router
import { Route, Switch } from "react-router-dom";
// Components
import Home from "./Components/Home";
import contact from "./Components/contact";
import About from "./Components/About";
import Navigation from "./Components/Navigation";
import Error from "./Components/Error";
import Movies from "./Components/Movies";
import Description from "./Components/Description";
import { data } from "./data";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/contact" component={contact} />
        <Route path="/about" component={About} />
        <Route exact path="/Movies" component={Movies} />
        <Route
          path="/Movies/:id"
          render={(props) => <Description data={data} {...props} />}
        />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
