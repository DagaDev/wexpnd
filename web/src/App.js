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
            <Switch>
                <Provider store={store}>
                    <Route  path="/" exact >
                        <Todo />
                    </Route>
                    <Route  path="/todo/:id" exact >
                        lis
                    </Route>
                </Provider>
            </Switch>
        </Router>
    );
}

export default App;
