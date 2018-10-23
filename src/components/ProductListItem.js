import React from 'react';

function ProductListItem(props){
    return(
        <div className="ProductListItem">
            <section>
            <h3><strong>Name:</strong> {props.name} </h3>
            </section>
            <h4 className="itemPrice"><strong>Price:</strong> ${props.price} </h4>
            <img src={props.url} alt={props.text}/>
            <h4>Description:</h4><p>{props.text}</p>
        </div>
    );
}

export default ProductListItem;