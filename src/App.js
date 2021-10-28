import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './components/shared/Header/Header';
import Home from './components/Home/Home/Home';
import './App.css';

function App() {
  return (
    <>
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
            <Home></Home>
         </Route>
       </Switch>
     </Router>
    </>
  );
}

export default App;
