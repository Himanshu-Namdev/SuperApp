import React, { useState } from 'react';

export default function Notes() {
  const [notes, setNotes] = useState('');
  const [savedNotes, setSavedNotes] = useState('');

  const handleChanges = (event) => {
    setNotes(event.target.value);
  };

  const saveData = () => {
    const updatedNotes = localStorage.getItem('notes') + ` ` +notes;
    localStorage.setItem('notes', updatedNotes);
    setSavedNotes(updatedNotes);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // If Enter key is pressed, save the data
      saveData();
    }
  };
return (
    <div className="w-[35%] height bg-[#F1C75B] rounded-lg h-[88%] p-5">
      <p className='font-roboto text-[38px] font-normal'>All notes</p>
      <input
        type="text"
        className="bg-[#F1C75B] w-full h-auto overflow-y-auto outline-none flex items-start justify-start font-roboto text-[21px] font-[400]"
        value={notes}
        onChange={handleChanges}
        onKeyPress={handleKeyPress} // Handle Enter key press
        placeholder="Your text here"
      />
      <p className='w-[100%] overflow-y-scroll max-h-[200px]'>{savedNotes}</p>

    </div>
  );
}
