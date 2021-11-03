import "./itemInCart.css";

const itemInCart = (props) => {
    
    return (
    <div className="item-cart">
        <img src={props.data.image} alt="product" />
        <div className="info">
            <h4>{props.data.title}</h4>
            <label>{props.data.category}</label>
        </div>

        <label>{props.data.price}</label>
        <label>{props.data.quantity}</label>
        <label>{props.data.price * props.data.quantity}</label>
        </div>
    );
};

export default itemInCart;