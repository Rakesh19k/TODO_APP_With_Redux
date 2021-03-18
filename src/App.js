import './App.css';
import { Provider  } from "react-redux";
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import "bootstrap/dist/css/bootstrap.css";
import {store} from "./redux/store"

function App() {
  return (
    <div className="app m-5">
      <Provider store={store}>
        <TodoInput/>
        <TodoList/>
      </Provider>
    </div>
  );
}

export default App;
