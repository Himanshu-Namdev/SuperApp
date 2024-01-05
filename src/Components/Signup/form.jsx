// Form.js
import React, { useEffect } from 'react';

const Form = ({
  name,
  setName,
  username,
  setUsername,
  email,
  setEmail,
  mobile,
  setMobile,
  isChecked,
  setIsChecked,
  checkboxError,
  nameError,
  usernameError,
  emailError,
  mobileError,
  setNameError,
  setUsernameError,
  setEmailError,
  setMobileError,
  setCheckboxError,
}) => {
  useEffect(() => {
    // Clear errors after 3 seconds
    const timeout = setTimeout(() => {
      setNameError('');
      setUsernameError('');
      setEmailError('');
      setMobileError('');
      setCheckboxError('');
    }, 3000);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [nameError, usernameError, emailError, mobileError, checkboxError]);

  return (
    <div className="w-[60%] mx-auto">
      <form className="space-y-5">
        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field  bg-[#292929] h-[64px] w-[100%] rounded text-[#7C7C7C] px-4"
            placeholder="Name"
          />
          {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field  bg-[#292929] h-[64px] w-[100%] rounded text-[#7C7C7C] px-4"
            placeholder="Username"
          />
          {usernameError && <p className="text-red-500 text-sm">{usernameError}</p>}
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field  bg-[#292929] h-[64px] w-[100%] rounded text-[#7C7C7C] px-4"
            placeholder="Email"
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="input-field bg-[#292929] h-[64px] w-[100%] rounded text-[#7C7C7C] px-4"
            placeholder="Mobile"
          />
          {mobileError && <p className="text-red-500 text-sm">{mobileError}</p>}
        </div>
      </form>
      <div className="flex items-center mb-4 mt-4 ">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="w-4 h-4"
          id="check"
        />
        <label
          htmlFor="check"
          className="ml-4 text-[#7C7C7C] font-dm-sans font-normal text-base leading-relaxed tracking-wide"
        >
          Share my registration data with Superapp
        </label>
        {checkboxError && <p className="text-red-500 text-sm">{checkboxError}</p>}
      </div>
    </div>
  );
};

export default Form;
