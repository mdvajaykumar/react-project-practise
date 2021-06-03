import logo from "./logo.svg";
import "./App.css";
import { EmployeeCreate } from "./components/EmployeeCreate";
import { EmployeeList } from "./components/EmployeeList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./common/NavBar";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/employee-create">
          <EmployeeCreate></EmployeeCreate>
        </Route>
        <Route path="/employee-list">
          <EmployeeList></EmployeeList>
        </Route>
        <Route path="/">
          <EmployeeList></EmployeeList>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
