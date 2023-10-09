import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { BsCart } from "react-icons/bs";
import {useNavigate} from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  
  const totalQty = cartItems.reduce((totalQty, item)=> totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((total, item)=> total + item.qty * item.price, 0);

  console.log(cartItems);

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] p-5 bg-gray-100  h-full mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } trasition-all duration-500 z-50 `}
      >
        <div className="flex justify-between items-center my-3 ">
          <span className="text-xl font-bold">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-500
                 text-gray-900 font-bold p-1 text-2xl rounded-md hover:text-red-300  hover:border-red-400 cursor-pointer "
          />
        </div>

        { cartItems.length > 0 ? cartItems.map((item) => {
          return <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} qty={item.qty} />;
        }) : <h2 className="text-xl text-center text-gray-800 font-semibold mt-2">Your Cart is Empty </h2> }

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800 my-1 text-lg">Items : {totalQty} </h3>
          <h3 className="font-semibold text-gray-800 my-1 text-lg">
            Total Amount : {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:[18vw] my-2" />
          <button 
          onClick={()=> navigate("/success")}
            className="px-3 bg-blue-700 py-2 text-white rounded-lg cursor-pointer 
          border-none font-semibold lg:w-[280px] w-[90vw] text-lg mb-5 "
          >
            Checkout Items
          </button>
        </div>
      </div>
      <BsCart
        onClick={() => setActiveCart(!activeCart)}
        className= {`rounded-full bg-blue-400 cursor-pointer
         shodow-md text-5xl p-3 fixed bottom-5 right-4   ${totalQty > 0 && "animate-bounce delay-500 transition all"}`}
      />
    </>
  );
};

export default Cart;
