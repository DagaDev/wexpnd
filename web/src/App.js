import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Todo } from './components/Todo';

function App() {
    return (
        <Router>
            <Todo />
        </Router>
    );
}

export default App;
