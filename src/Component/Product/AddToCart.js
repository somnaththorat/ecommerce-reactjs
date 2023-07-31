import React, { useState } from 'react';
import styled from 'styled-components';
import {FaMinus, FaPlus} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Button } from '../Style/Button';
import { useCartContext } from '../../Context/CartContext';


const AddToCart = ({product}) => {
    const { id, stock} = product;
    const [amount, setAmount] = useState(1);
    const {AddToCart} = useCartContext();
    const setIncrease = () =>{
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }
    const setDecrease = () =>{
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

  return ( 
    <Wrapper>
        <div className='cart-button'>
            <div className='amount-toggle'>
                <button onClick={()=>setDecrease()}><FaMinus/></button>
                <div className='amount-style'> {amount} </div>
                <button onClick={()=>setIncrease()}><FaPlus/></button>
            </div>
            <NavLink to= '/cart' onClick={()=>{AddToCart(id, amount, product)}}>
            <Button>
                Add to Cart
            </Button>
            </NavLink>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart