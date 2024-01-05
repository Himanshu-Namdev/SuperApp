// Signup.js
import React, { useState } from "react";
import Image from "./Assets/image 13.png";
import Form from "./form";
import { Link } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");

  const handleSignUp = () => {
    // Check if any of the fields are empty
    if (!name || !username || !email || !mobile || !isChecked) {
      // Set error messages for empty fields
      setNameError(name ? "" : "Field is required");
      setUsernameError(username ? "" : "Field is required");
      setEmailError(email ? "" : "Field is required");
      setMobileError(mobile ? "" : "Field is required");
      setCheckboxError(isChecked ? "" : "Field is required");
     
      // Stop execution if any field is empty
      return;
    }

    
    // Clear error messages if everything is filled
    setNameError("");
    setUsernameError("");
    setEmailError("");
    setMobileError("");
    setCheckboxError("");
    
    // You can perform any additional actions here if needed
    localStorage.setItem("name", name);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("isChecked", isChecked.toString());
    
    console.log("Sign up successful!");
  };

  return (
    <div className="flex h-screen bg-black w-full">
      <div className="flex-1 w-1/2">
        <img src={Image} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 p-12 flex flex-col justify-center items-center mx-auto">
        <h1
          className="text-[#72DB73] font-[Single Day] text-6xl font-normal leading-94 tracking-normal text-left my-5"
          style={{ fontFamily: "Single Day" }}
        >
          Super app
        </h1>
        <p className="text-white font-dm-sans font-normal text-2xl leading-tight mb-10">
          Create your new account
        </p>
        <Form
          name={name}
          setName={setName}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          mobile={mobile}
          setMobile={setMobile}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          checkboxError={checkboxError}
          nameError={nameError}
          usernameError={usernameError}
          emailError={emailError}
          mobileError={mobileError}
          setNameError={setNameError}
          setUsernameError={setUsernameError}
          setEmailError={setEmailError}
          setMobileError={setMobileError}
          setCheckboxError={setCheckboxError}
        />
        {(name&&username&&email&&isChecked&&mobile) ? (
          <Link to='/SelectCategory' className="w-[60%]">
            <button
              onClick={handleSignUp}
              className="bg-[#72DB73] text-white w-[100%] rounded-full py-2 font-roboto font-semibold text-2xl leading-8 tracking-wide"
            >
              SIGN UP
            </button>
          </Link>
        ) : (
          <button
            onClick={handleSignUp}
            className="bg-[#72DB73] text-white w-[60%] rounded-full py-2 font-roboto font-semibold text-2xl leading-8 tracking-wide"
          >
            SIGN UP
          </button>
        )}

        <div className="flex flex-col items-start space-y-5 text-[#7C7C7C] w-[60%] mt-4">
          <p>
            By clicking on Sign up, you agree to Superapp{" "}
            <span className="text-[#72DB73] cursor-pointer">
              Terms and Conditions of Use
            </span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data, please read Superapp{" "}
            <span className="text-[#72DB73] cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
