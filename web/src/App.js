import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import  Todo from './components/Todo';
import { Provider } from 'react-redux';

import store from './redux/store';

function App() {
    return (
        <Router>
            <Provider store={store}>
                <Todo />
            </Provider>
        </Router>
    );
}

export default App;
