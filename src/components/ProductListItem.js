import React from 'react';

function ProductListItem(props){
    return(
        <div className="ProductListItem">
            <section>
            <h3 tabIndex="0"><strong>Name:</strong> {props.name} </h3>
            </section>
            <h4 className="itemPrice"  tabIndex="0"><strong>Price:</strong> ${props.price} </h4>
            <img src={props.url} alt={props.text}/>
            <h4  tabIndex="0">Description:</h4><p  tabIndex="0">{props.text}</p>
        </div>
    );
}

export default ProductListItem;