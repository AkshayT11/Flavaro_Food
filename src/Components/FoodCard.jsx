import React from 'react'
import {AiFillStar} from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';

const FoodCard = ({id,name,rating,img,desc,price, handleToast}) => {
  const dispatch = useDispatch();

  return (
    <div className='font-bold w-[250px] bg-gray-200 p-5 flex flex-col gap-2 rounded-lg'>
        <img 
        className='w-auto h-[130px] overflow-hidden hover:scale-110 cursor-grab transition-all duration-500'
        src= {img} alt="img" />
        <div className='flex justify-between'>
            <h2> {name}</h2>
            <span className='text-green-500'> ₹ {price} </span>
        </div>
        <p className='text-sm font-normal'> {desc.slice(0,51)}.... </p>
        <div className='flex justify-between'>
            <span className='flex items-center gap-1'>
            <AiFillStar className='text-yellow-500'/> {rating}
            </span>
            <button
            onClick={()=> {
              dispatch(addToCart({id, name,img, price, rating, price, qty: 1})
              );
              handleToast(name);
            }} 
            className='py-1 px-3 bg-green-500 text-white
             rounded-lg cursor-pointer'>Add To Cart</button>
        </div>
    </div>
  )
}

export default FoodCard