import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";
const buttonBaseClass =
  "bg-[#148A08] text-white h-[56px] w-[200px] rounded-full font-sans text-[26px] flex justify-center items-center absolute right-20 bottom-10 transition duration-300";
const buttonEnabledClass = `${buttonBaseClass} hover:bg-white hover:text-[#148A08]`;
const buttonDisabledClass = `${buttonBaseClass} opacity-50`;

const LeftCategory = React.memo(
  ({ selectedCategories, onCategoryDeselect }) => {
    const handleDeselect = (category) => {
      onCategoryDeselect(category);
    };

    const [flag, setFlag] = useState(false);
    const handleWarnings = () => {
      if (selectedCategories.length < 3) {
        
        setFlag(true);
      } else {
        setFlag(false);
        localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
        
      }
      
    };
    if (selectedCategories.length >= 3) {
      localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
    }
    

    return (
      <div className=" w-[30%] h-[100vh] mx-auto  flex flex-col justify-start items-center">
        <div>
          <h1 className="font-normal text-[71px] text-[#72DB73] mt-[150px]" style={{ fontFamily: "Single Day" }}>Super App</h1>
          <p className="font-roboto text-[68px] font-bold mt-3 text-white">Choose your entertainment category</p>
          <ul className="flex flex-wrap text-[25.14px] gap-5 mt-7">
            {selectedCategories.map((category) => (
              <li key={category.name} className="bg-[#148A08] w-auto rounded-full h-[52px] flex justify-center items-center ">
                <span className="text-white px-4">{category.name}</span>
                <button onClick={() => handleDeselect(category) } className="text-[#085C00] px-3">X</button>
              </li>
            ))}
          </ul>
          {flag && (
            <div className="flex justify-start items-center text-red-500 mt-8  ">
              <IoIosWarning /><p className="">Minimum 3 category required</p>
            </div>
          )}
        </div>
        {selectedCategories.length >= 3 ? (
          <Link to="/Homepage">
            <button className={buttonEnabledClass}>Next Page</button>
          </Link>
        ) : (
          <button className={buttonDisabledClass} onClick={handleWarnings}>
            Next Page
          </button>
        )}
      </div>
    );
  }
);

export default LeftCategory;
