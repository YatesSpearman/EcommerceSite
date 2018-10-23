import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Button from '../containers/Button';
import ProductListItem from '../components/ProductListItem';

export default class ProductList2 extends Component {
    
    constructor() {
        super();

        this.state = {
            selected: 'All',
            selectAll: true
        }
        
        this.handleButtonClick = this.handleButtonClick.bind(this);
        
    }
    
    handleButtonClick(event) {
        let result = event.target;
        let resultText = result.innerHTML;

        let newState = {...this.state};
        newState.selected = resultText;
        
        this.setState({
            selected: newState.selected,
            selectAll: false
        });

        console.log(this.state)
    }

    displayAll(){
        let newState = {...this.state};
        newState.selectAll= true;

        this.setState({
            selectAll: newState.selectAll
        });
    };
       

    

    

    render() {
        
           
          

            const filteredItems = this.state.selected === 'All' ? this.props.listItems : this.props.listItems.filter(item => item.productType === this.state.selected);
        
            //  const filteredItems = this.props.listItems.filter(item => item.productType === this.state.selected);
            //  console.log(filteredItems);

                 let itemList = filteredItems.map((item, index) => {
                    return (
                        <ProductListItem 
                        key={item.productID}
                        index={index}
                        name={item.name}
                        price={item.price}
                        url={item.imgUrl}
                        type={item.productType}
                        text={item.caption}/>
                    );
                    
                })

            


            return (
                <Aux>
                    <h2 id="ProductListHead">Products</h2>
                    <section className="buttonRow">
                    <Button name="All" onClick={this.handleButtonClick}/>
                    <Button name="Hats" onClick={this.handleButtonClick}/>
                    <Button name="Shoes" onClick={this.handleButtonClick}/>
                    <Button name="Shirts" onClick={this.handleButtonClick}/>
                    <Button name="Pants" onClick={this.handleButtonClick}/>
                    </section>

                    <div className="ProductList" >
                        {itemList} 
                    </div>

                </Aux>
    );
  }
}
