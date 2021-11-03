import React, {useState, useContext} from "react";
import QuantityPicker from "./quantityPicker";
import "./item.css"
import storeContext from "../context/storeContext";

const Item = (props) => {
//state
    const [quantity, setQuantity] = useState(props.data.minimum || 1);
    const addProd = useContext(storeContext).addProductToCart;
//functions
const handleAdd = () => {
    let prodForCart =  {
        ...props.data,
        quantity: quantity
    };
    addProd(prodForCart);
};

const onQuantityChange = (quantity) => {
    console.log("new qnty", quantity);
    setQuantity(quantity);
};

const getTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
};

//return
    return (
        <div className="item">

            <h5>{props.data.title || "no title"}</h5>

            <label className="total">${getTotal()}</label>
            <label className="price">${props.data.price.toFixed(2)}</label>

            <img src={props.data.image} alt="product"/>

            <div className="controls">
                <QuantityPicker minimum={props.data.minimum || 1} onChange={onQuantityChange}/>
                
                <button onClick={handleAdd} className="btn btn-sn btn-dark"> <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                Add
                </button>
            </div>
        </div>
    );
};

export default Item;

