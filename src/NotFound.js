import React from 'react'
import glia from "../src/assets/images/glia.jpg";

const NotFound = () => {
  return (
    <div>
        <div className="lost">
            <img src={glia} alt="glia" className="glia" />
            <div className={`chat-bubble`}>
                <div className="message">You have arrived in an empty parallel universe.</div>
                <h2 style={{ textAlign: 'center' }}> ========== </h2>
                <div className="message">Click one of the buttons at the top to return.</div>
            </div>
        </div>
    </div>
  )
}

export default NotFound