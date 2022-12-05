import Counter from "./component/Counter";
import TodoApp from "./component/TodoApp";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserApp from "./component/UserApp";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Counter</Link>
          </li>
          <li>
            <Link to="/todo-app">Todo App</Link>
          </li>
          <li>
            <Link to="/user-app">Contact App</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/todo-app" element={<TodoApp />} />
          <Route path="/user-app" element={<UserApp />} />
        </Routes>
      </Router>
    </div>
  );
}
