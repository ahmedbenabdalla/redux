import "./Components/Style/Style.css";
import MovieList from "./Components/MovieList";
import { Switch, Route } from "react-router-dom";
import Details from "./Components/Details";

function App() {
  return (
    <div id="App">
      <Switch>
        <Route exact path="/" render={() => <MovieList />}></Route>
        <Route
          exact
          path="/movie/:Title"
          render={(props) => <Details {...props}></Details>}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
