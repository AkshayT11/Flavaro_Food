import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {

  const [categories, setCategories] = useState([]);

  const listUniqueCategories = ()=> {
    const uniqueCategories = [
     ...new Set(FoodData.map((food)=> food.category)) ];
      setCategories(uniqueCategories);
      console.log(uniqueCategories);
  };

  useEffect(()=> {
    listUniqueCategories()
  },[]);

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state)=> state.category.category);

  return (
    <div className="mx-6">
      <h2 className="text-xl font-semibold my-1">Find the Best Food</h2>

      <div className="flex my-5 lg:gap-3 gap-2 flex-wrap">
      <button
            onClick={()=> dispatch(setCategory("All"))} 
            className={`px-3 py-2 font-semibold
         bg-gray-200 rounded-lg  hover:bg-green-500 hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white"} ` } >
          All
        </button>   

       {
        categories.map((category, index)=> {
          return(
            <button
            onClick={()=> dispatch(setCategory(category))} 
            key={index} className={`px-3 py-2 font-semibold
         bg-gray-200 rounded-lg  hover:bg-green-500 hover:text-white ${selectedCategory === category && 
          "bg-green-500 text-white"} `} >

          {category}
        </button>

          );
        } )
       }
      </div>
    </div>
  );
};

export default CategoryMenu;
