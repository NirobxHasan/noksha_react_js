import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import CouseDetails from './components/CourseDetails/CouseDetails';
import NotFound from './components/NotFound/NotFound';
import Teachers from './components/Teachers/Teachers';
import "animate.css"
function App() {
  return (
    <div className="App">

      <Router>
        <NavBar/>
        
          <Switch>
            <Route exact path='/'>
              <Header/>
            </Route>

            <Route exact path='/home'>
              <Header/>
            </Route>
            <Route exact path='/courses'>
              <Courses/>
            </Route>
            <Route exact path='/teachers'>
              <Teachers/>
            </Route>
            <Route exact path='/course/:courseID'>
              <CouseDetails/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>

          </Switch>
        <Footer/>
      </Router>
      
     
     
    </div>
  );
}

export default App;
