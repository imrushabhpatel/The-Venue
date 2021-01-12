import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured/index';
import VenueInfo from './components/venueInfo/index';
import Highlights from './components/highlights/index';
import Pricing from './components/pricing/index';
import Location from './components/Location/index';

class App extends Component{
  render(){
    return(
      <div className="App" style={{height:"1500px", background:'cornflowerblue'}}>
        <Header/> 
        <Element name="featured"><Featured/></Element>
        <Element name="venueInfo"><VenueInfo/></Element>
        <Element name="highlight"><Highlights/></Element>
        <Element name="pricing"><Pricing/></Element>
        <Element name="location"><Location/></Element>
        <Footer/>
        </div>
    );
  }
}

export default App;
