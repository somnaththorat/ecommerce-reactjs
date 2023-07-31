import React from "react";
// import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../Context/CartContext.js";

const CartItem = ({ id, title, images, stock, price,amount}) => {
  const { removeItem, setIncrement,  setDecrement} = useCartContext();

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={images} alt={id} />
          </figure>
        </div>
        <div>
          <p>{title}</p>
          <div className="color-div">
            <div
              className="color-style"
            //   style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          {Intl.NumberFormat('en-IN',{style:"currency", currency:'INR'}).format(price * 80)}
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={amount}
        setDecrement={()=>setDecrement(id)}
        setIncrement={()=>setIncrement(id)}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          {Intl.NumberFormat('en-IN',{style:"currency", currency:'INR'}).format(price * 80  * amount)}
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>

      

    </div>


  );
};

export default CartItem;