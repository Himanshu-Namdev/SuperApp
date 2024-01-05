// SelectCategory.js
import React, { useState } from 'react';
import LeftCategory from './LeftCategory';
import RightCategory from './RightCategory';

export default function SelectCategory() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategorySelect = (category) => {
    if (!selectedCategories.some((c) => c.name === category.name)) {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    }
  };

  const handleCategoryDeselect = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.filter((c) => c.name !== category.name)
    );
  };

  return (
    <div className="w-[100%] h-[100vh] bg-black flex justify-around items-center">
      <LeftCategory selectedCategories={selectedCategories} onCategoryDeselect={handleCategoryDeselect} />
      <RightCategory onCategorySelect={handleCategorySelect} onCategoryDeselect={handleCategoryDeselect} selectedCategories={selectedCategories} />
    </div>
  );
}