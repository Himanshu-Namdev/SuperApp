import React from "react";
import ProfileImage from "../Assets/ProfileImage.png";

export default function ProfileCard() {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const username = localStorage.getItem("username");
  
  // Retrieve the data from local storage
  const selectedCategoriesData = JSON.parse(localStorage.getItem("selectedCategories"));
  
  // Extracting only the names of the categories
  const categoryNames = selectedCategoriesData.map((category) => category.name);

  return (
    <div className="bg-[#5746EA] w-[100%] h-[319px] rounded-lg flex items-center px-7 text-white">
      <img src={ProfileImage} alt="" className="h-[90%]" />
      <div className="w-[70%]  h-[90%] mx-6  mt-5">
        <p className="text-[25px] text-normal font-roboto">{name}</p>
        <p className="text-[25px] text-normal font-roboto">{email}</p>
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-normal font-roboto">
          {username}
        </p>

        <div className="h-[50%] w-[100%] overflow-y-auto ">
          {categoryNames.map((name) => (
            <button
              key={name}
              className="rounded-full bg-[#9F94FF] text-4 text-white px-5 w-[40%] py-2 text-start m-2"
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
