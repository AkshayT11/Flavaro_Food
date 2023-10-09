import React from "react";
import { useDispatch } from "react-redux";
import {setSearch} from "../redux/slices/SearchSlice"; 


const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-11">
      <div>
        <h3 className="text-xl font-bold  text-gray-600">
          {new Date().toUTCString().slice(0, 16)}{" "}
        </h3>
        <h1 className="text-2xl font-bold">Flavor Foods</h1>
      </div>

      <div>
        <input
        className="p-3 border mt-3 border-gray-500 outline-none rounded-lg w-full lg:w-80"
          type="text"
          placeholder="search Favourite Food Here"
          name="search"
          onChange={(e)=> dispatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};

export default Navbar;
