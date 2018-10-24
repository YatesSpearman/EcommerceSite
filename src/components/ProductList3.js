import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Button from '../containers/Button';
import ProductListItem from '../components/ProductListItem';

export default class ProductList3 extends Component {
    
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
    };

    handleLowToHighFilter(){
        document.getElementById('ProductList').setAttribute("style", "flex-wrap: wrap;");
    };

    handleHighToLowFilter(){
        document.getElementById('ProductList').setAttribute("style", "flex-wrap: wrap-reverse;");
    };
 
    render() {

        const filteredItems = this.state.selected === 'All' ? this.props.listItems : this.props.listItems.filter(item => item.productType === this.state.selected);
        
            

        let itemList = filteredItems.map((item, index) => {
            return (
                <ProductListItem 
                key={item.productID}
                index={index}
                name={item.name}
                price={item.price}
                url={item.imgUrl}
                type={item.productType}
                text={item.caption}
                />
            );
                    
        });

            


    return (
        <Aux>
            
            <h2 className="ProductListHead" id="main" tabIndex="0">Products</h2>
            <hr />

            <h3 className="buttonRowHeader">Product Types</h3>
            <section className="buttonRow">
                    <Button name="All" onClick={this.handleButtonClick}/>
                    <Button name="Hats" onClick={this.handleButtonClick}/>
                    <Button name="Shoes" onClick={this.handleButtonClick}/>
                    <Button name="Shirts" onClick={this.handleButtonClick}/>
                    <Button name="Pants" onClick={this.handleButtonClick}/>
            </section>

            <h3 className="buttonRowHeader">Pricing</h3>
            <section className="buttonRow">
                <Button name="High To Low" onClick={this.handleHighToLowFilter} />
                <Button name="Low To High" onClick={this.handleLowToHighFilter} />
            </section>

            <div className="ProductList" id="ProductList" >
                {itemList} 
            </div>
            
        </Aux>
    );
  }
}
