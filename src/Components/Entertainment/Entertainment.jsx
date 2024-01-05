import React from "react";
import ProfileImage from "../Homepage/Assets/ProfileImage.png";
import List from "./List";
const Entertainment = () => {
  const selectedCategoriesData = JSON.parse(
    localStorage.getItem("selectedCategories")
  );
  const categoryNames = selectedCategoriesData.map((category) => category.name);
  return (
    <div className="bg-black w-full h-screen overflow-y-auto">
      <div className="top w-full flex justify-between">
        <h1
          className="text-[#72DB73] font-[Single Day] text-6xl font-normal m-10"
          style={{ fontFamily: "Single Day" }}
        >
          Super app
        </h1>
        <img
          src={ProfileImage}
          alt=""
          className="h-20 w-20 rounded-full m-10"
        />
      </div>

      <div className="bottom">
        <p className="text-white font-roboto text-[32px] font-normal mx-10">
          Entertainment according to your choice
        </p>
        <div className="">
          {categoryNames.map((name) => (
            <List genre={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
