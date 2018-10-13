import React, { Component } from 'react';
import ProductList2 from './components/ProductList2';
import Banner from './containers/Banner';
import axios from 'axios';
import Aux from './hoc/Aux';
import ContactForm from './components/ContactForm';
import SimpleSlider from './SimpleSlider';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      
      products: []
    };
  };

  componentDidMount(){
    

    axios.get('products.json')
    .then(res =>{
      const json = res.data.products;
      let newProducts = this.state.products.slice();
      newProducts = json;
      this.setState({
        products: newProducts
      });
    })
    
  }

  render() {
    
    
    


    return (
      <Aux>
        <Banner />
        <SimpleSlider imgURL={this.state.products}/>
        <ProductList2 listItems={this.state.products}/>
        <hr />
        <ContactForm />
      </Aux>
    );
  }
}

export default App;
