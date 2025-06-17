import React from 'react';
import SignUpForm from './components/Form';
import '../public/styles/App.css';
import { FaArrowRight } from "react-icons/fa6";

function App() {
  
  return (
    <div className="formContainer">
      <div className="form">
        <div className="formheading">
          <h2> SignUp With AplianTech </h2>
          <span>
            {" "}
           SignIn With AplianTech <FaArrowRight />
          </span>
        </div>

        <div className="formSection">

          <SignUpForm />

        </div>
      </div>
    </div>
  );

}

export default App;