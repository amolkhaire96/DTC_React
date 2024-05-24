import React from "react";
import './Model.css';


function Model({ isOpen, onClose }) {
 

  if (!isOpen) return null;
  return (
    <div>
      {isOpen && (
        <div  className="modal">
          <div className="modal-content">
          <span className="close" onClick={onClose}>
              &times;
            </span>
            <p>
              <input
                type="text"
                placeholder="First name"
                style={{ height: "30px", borderRadius: "5px" }}
              />

              <input
                type="text"
                placeholder="Last name"
                style={{
                  height: "30px",
                  borderRadius: "5px",
                  marginLeft: "15px",
                }}
              />
            </p>
            <p>
              <input
                type="text"
                placeholder="email"
                style={{ width: "100%", height: "30px", borderRadius: "5px" }}
              />
            </p>
            <p>
              <input
                type="text"
                placeholder="Course Name"
                style={{ height: "30px", borderRadius: "5px" }}
              />

              <input
                type="text"
                placeholder="Contact Number"
                style={{
                  height: "30px",
                  borderRadius: "5px",
                  marginLeft: "15px",
                }}
              />
            </p>
            <p>
              <input
                type="text area"
                placeholder=" Message"
                style={{
                  width: "100%",
                  height: "90px",
                  textAlign: "top",
                  borderRadius: "5px",
                }}
              />
            </p>
            <p>
              <button
                style={{
                  width: "150px",
                  height: "40px",
                  textAlign: "top",
                  borderRadius: "50px",
                  color: "white",
                  backgroundColor: "orange",
                  border: "0",
                }}
              >
                Send Message
              </button>
            </p>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default Model;
