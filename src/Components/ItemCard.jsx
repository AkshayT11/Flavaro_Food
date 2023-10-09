import React from "react";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-md p-2 mb-3">
      <AiFillDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed !!`, {
            icon: '👏',
          });
        }}
        className="absolute right-5 
      cursor-pointer"
      />

      <img className="w-[50px] h-[50px] " src={img} alt="pizza" />

      <div className="">
        <h2 className="font-bold text-gray-800">{name} </h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹ {price} </span>

          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-700 hover:text-white hover:bg-green-500 hover:border-none p-1 text-xl rounded-md transition-all ease-linear cursor-pointer"
            />
            <span>{qty} </span>

            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-700 hover:text-white hover:bg-green-500 hover:border-none p-1 text-xl rounded-md transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
