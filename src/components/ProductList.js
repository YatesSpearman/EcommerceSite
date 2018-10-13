import React from 'react';
import ProductListItem from '../components/ProductListItem';
import Button from '../Button';
import Aux from '../hoc/Aux';

function ProductList(props){
    
    console.log(props.listItems)

    const itemList = props.listItems.map((item, index) => {
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
            <section className="buttonRow">
            <Button name="All" />
            <Button name="Hats" />
            <Button name="Shoes"/>
            <Button name="Shirts"/>
            <Button name="Pants"/>
            </section>

            <div className="ProductList">
                {itemList} 
            </div>

        </Aux>
    );
}

export default ProductList;