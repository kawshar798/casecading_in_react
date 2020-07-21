import React from 'react';
import logo from './logo.svg';
import './App.css';
import Casecading from './component/Casecading';
import Footer from './component/Footer';
import classes from "./component/casecading.module.css";
function App() {
  return (
    <div className={classes.container}>
<Casecading/>
<Footer/>
    </div>
  );
}

export default App;
