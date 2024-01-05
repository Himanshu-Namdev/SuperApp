import React, { useState } from "react";
import image2 from './Assets/image 2.png';
import image3 from './Assets/image 3.png';
import image4 from './Assets/image 4.png';
import image6 from './Assets/image 6.png';
import image7 from './Assets/image 7.png';
import image8 from './Assets/image 8.png';
import image9 from './Assets/image 9.png';
import image10 from './Assets/image 10.png';
import image11 from './Assets/image 11.png';
export default function RightCategory({ onCategorySelect, onCategoryDeselect, selectedCategories }) {
  const categoryData = [
    { name: "Action", bgColor: "bg-[#FF5209]", image: image2 },
    { name: "Drama", bgColor: "bg-[#D7A4FF]", image: image3 },
    { name: "Romance", bgColor: "bg-[#11B800]", image: image4 },
    { name: "Thriller", bgColor: "bg-[#84C2FF]", image: image6 },
    { name: "Western", bgColor: "bg-[#902500]", image: image7 },
    { name: "Horror", bgColor: "bg-[#7358FF]", image: image8 },
    { name: "Fantasy", bgColor: "bg-[#FF4ADE]", image: image9 },
    { name: "Music", bgColor: "bg-[#E61E32]", image: image10 },
    { name: "Fiction", bgColor: "bg-[#6CD061]", image: image11 },
  ];
 
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleCategorySelect = (category) => {
    setHoveredItem(null);
    if (isCategorySelected(category)) {
      onCategoryDeselect(category);
    } else {
      onCategorySelect(category);
    
    }
  };

  
  const isCategorySelected = (category) =>
    selectedCategories && selectedCategories.some((c) => c.name === category.name);
  return (
    <div className="w-[50%] mx-auto h-[100vh] flex flex-col justify-center items-center">
      <div className="w-[80%] h-[80%] mt-2 flex justify-center items-center">
        <ul className="flex flex-wrap gap-4 justify-center items-center">
          {categoryData.map((category, index) => (
            <li
              key={category.name}
              className={`relative w-[20vh] h-[20vh] rounded-lg font-medium font-sans text-[26px] text-white p-2 cursor-pointer ${category.bgColor} ${isCategorySelected(category) ? 'border-4 border-green-500' : ''}`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleCategorySelect(category)}
            >
              {hoveredItem === index && (
                <div className="absolute inset-0 border-4 border-green-500 rounded-lg"></div>
              )}
              <span>{category.name}</span>
              <button
                className={`absolute top-2 right-2 text-white cursor-pointer ${isCategorySelected(category) ? 'block' : 'hidden'}`}
                onClick={(e) => {
                  e.stopPropagation(); 
                  onCategoryDeselect(category);
                }}
              >
                X
              </button>
              <div className="w-full min-h-[55%] bg-black mt-5 rounded-lg">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover rounded-lg" />
              </div>
            </li>
          ))}
        </ul>
      </div>  
    </div>
  );
}
