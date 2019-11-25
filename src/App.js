import React from 'react';
import Header from './components/layout/Header';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/pages/login/login';
import Dashboard from './components/pages/dashboard/dashboard'
//import Auth from './components/auth'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
<Router>
    <div className="App">
     
    <Header />
    <Route path="/login" component={ Login } />
    <Route path="/dashboard" component={ Dashboard } />
   </div>
    </Router>
  );
}

export default App;
