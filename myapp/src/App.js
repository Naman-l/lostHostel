import React from "react";
import "./App.css";
import Homepage from "./Screens/HomePage/Home";
// import Rooms from "./pages/Rooms";
// import SingleRoom from "./pages/SingleRoom";
// import Tours from "./pages/Tours";
// import Navbar from "./components/Navbar";
// import Footer from "./Components/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"; /**Switch will render the first route child that matches */

function App() {
  return (
    <div className="app">
        {/* <Navbar /> */}
        <Router>
          <Routes>
          <Route exact path="/" element={Homepage}>
            {/* <Homepage/> */}
          </Route>
          </Routes>
          {/* <Route exact path="/rooms/" component={Rooms} /> */}
          {/* <Route exact path="/tours" component={Tours} /> */}
          {/* <Route exact path="/rooms/:zebra" component={SingleRoom} /> */}
          {/* <Route component={Error} /> */}
        </Router>
        {/* <Footer /> */}
    </div>
  );
}

export default App;