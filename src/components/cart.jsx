import "./cart.css"
import { useContext } from 'react';
import storeContext from "../context/storeContext";
import ItemInCart from "./itemInCart";

const Cart = () => {
    const prodsIncart = useContext(storeContext).cart;

    return (
        <div className="cart-page">

            <div className="header">
                <h1>Check out</h1>
            </div>

            <div className="row">
                <div className="col-10">
                    <h4>Your items:</h4>


                    {prodsIncart.map((p) => <ItemInCart data={p}></ItemInCart>)}
                </div>

                <div className="col-2">
                    <h4>Your total:</h4>
                    <h3>$20</h3>
                    <hr />

                    <div className="coupon-from">
                        <input type="text" placeholder="have a coupon?" />
                        <button className="btn btn-sm btn-dark">Apply</button>
                    </div>

                    <button className="btn btn-section btn-primary">Proceed to payment</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;