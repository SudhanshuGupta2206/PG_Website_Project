import logo from './logo.svg';
import './index.css';

import  Home  from "./Components/Home";
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom'
import AddStudents from './Components/AddStudents';
import Navbar from './Components/Navbar';
import Update from '../src/Components/Update'
import Searchpage from './Components/Searchpage';
import About from './Components/About';


function App() {
  return (
    <Router>
      <Switch>
      <div className="App">
      <Route exatct path="/"><Navbar/> </Route>
     <Route exact path="/home"><Home/></Route>
     <Route path="/add"><AddStudents/></Route>
     <Route path={"/update:id"}><Update/></Route>
     <Route path={"/search:searchval"}><Searchpage/></Route>
     <Route path="/about"><About/></Route>
    </div>
      </Switch>
    
    </Router>
  );
}


export default App;
