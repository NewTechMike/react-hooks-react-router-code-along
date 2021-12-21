import React from "react";

function SignUp(){
  return(
    <div>
      <h1>Sign Up</h1>
      <form>
        <div>
          <input 
            type="text"
            name="email"
            placeholder="E-Mail"
          />
        </div>
      </form>
    </div>
  )
}

export default SignUp;