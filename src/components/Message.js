import React from "react";

function Message(){
  return(
    <div>
      <h1>Message</h1>
      <form>
        <div>
          <input 
            type="text"
            name="message"
            placeholder="Message"
            />
        </div>
      </form>
    </div>
  )
}

export default Message;