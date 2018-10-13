import React from 'react';

function ProductListItem(props){
    return(
        <div className="ProductListItem">
            <section>
            <h2><strong>Name:</strong> {props.name} </h2>
            </section>
            <h3><strong>Price:</strong> ${props.price} </h3>
            <img src={props.url} alt={props.text}/>
            <h3>Description:</h3><p>{props.text}</p>
        </div>
    );
}

export default ProductListItem;