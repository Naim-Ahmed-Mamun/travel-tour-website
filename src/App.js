import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/shared/Header/Header';
import Home from './components/Home/Home/Home';
import './App.css';
import Footer from './components/shared/Footer/Footer';
import AddDestination from './pages/AddDestination/AddDestination';
import Destination from './components/Home/Destination/Destination';
import AuthProvider from './Context/AuthProvider';
import Login from './components/Login/Login/Login';
import Register from './components/Register/Register';
import BookingRegistration from './components/bookingRegistration/BookingRegistration';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrders from './pages/MyOrders/MyOrders';
import ManageAllOrders from './pages/ManageAllOrders/ManageAllOrders';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/AboutUs/AboutUs';
import AllDestinations from './pages/AllDestinations/AllDestinations';

function App() {
   return (
      <>
         <AuthProvider>
            <Router>
               <Header></Header>
               <Switch>
                  <Route exact path="/">
                     <Home></Home>
                  </Route>
                  <Route path="/home">
                     <Home></Home>
                  </Route>
                  <Route path="/about">
                     <AboutUs></AboutUs>
                  </Route>
                  <Route path="/allDestinations">
                     <AllDestinations></AllDestinations>
                  </Route>
                  <Route path="/destination">
                     <Destination></Destination>
                  </Route>
                  <Route path="/register">
                     <Register></Register>
                  </Route>
                  <Route path="/login">
                     <Login></Login>
                  </Route>
                  <PrivateRoute path="/bookingRegistration/:id">
                     <BookingRegistration></BookingRegistration>
                  </PrivateRoute>
                  <Route path="/addDestination">
                     <AddDestination></AddDestination>
                  </Route>
                  <Route path="/myOrder">
                     <MyOrders></MyOrders>
                  </Route>
                  <Route path="/manageAllOrders">
                     <ManageAllOrders></ManageAllOrders>
                  </Route>
                  <Route path="/contact">
                    <Contact></Contact>
                  </Route>
               </Switch>
               <Footer></Footer>
            </Router>
         </AuthProvider>
      </>
   );
}

export default App;
