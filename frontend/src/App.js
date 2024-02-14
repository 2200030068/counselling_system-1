import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import SignIn from './components/Signin';
import Councelor from './components/Counsellor';
import Visitor from './components/Visitor';
import Appointment from './components/Appointment';
import Home from './components/Home';
import StickyFooter from './components/Footer';


// Placeholder components (replace them with your actual components)
const Homecomponent = () => <div>Home Component</div>;
const VisitorComponent = () => <div>Visitor Component</div>;

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/Signup' element={<Signup />} exact />
          <Route path='/signin' element={<SignIn />} exact />
          <Route path='/AddCounselor' element={<Councelor />} exact />
          <Route path='/Addvisitor' element={<Visitor />} exact />
          <Route path='/appointment' element={<Appointment/>} exact />
          
         
          


        </Routes>
      </main>
      <footer>
        <StickyFooter/>
      </footer>
    </React.Fragment>
  );
}

export default App;