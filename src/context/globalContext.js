import storeContext from "./storeContext";
import React, {useState, useContext} from 'react';

const GlobalContext = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({
        id:132535,
        name:"Martin Avelar",
        email: "abc@gmail.com"
    })


    const addProductToCart = (product) => {
        console.log("Add to cart");

        let copy =[...cart, product];

        setCart(copy);
    }
    
    const removeProdFromCart = (productId) => {
        console.log("Removing prod");
    }
    /**
     * left side is the abstract description for data/fns
     * right side is the implementation for data/fns
     * when someone call the abstract, will get the implementation
     */

    return (<storeContext.Provider 
        value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        removeProdFromCart: removeProdFromCart

    }}>
        {props.children}
    </storeContext.Provider>

    );
};

export default GlobalContext;