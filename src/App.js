import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Template} from './components/mainComponents.js';
import Header from './components/partials/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
function App() {
  return (
    <BrowserRouter>
        <Template>
            <Header />
                <Switch>
                  <Route exact path="">
                      <Home />
                  </Route>

                  <Route>
                    <NotFound />
                  </Route>
                </Switch>
        </Template>
    </BrowserRouter>
  );
}

export default App;
