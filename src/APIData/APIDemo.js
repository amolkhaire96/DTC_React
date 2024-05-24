import React,{ useState } from "react";
import "./APIDemo.css";
import Model from "../model/Model";

const APIDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Iclicked model")
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
    
     <div>
     <div className="navBar">
        <img
          src="https://downtowncoders.com/assets/images/logoNew.png"
          className="logo"
        />
        <p>+91 7337432531</p>
        <a href="mail">venkatesh.jakkam@gmail.com</a>
      </div>
      <div className="main">
        <h1>Tableau for Advanced Data <br></br> Analytics</h1>
        <p>This course is specifically designed for everyone, regardless of whether you are entirely new <br></br> to the realm of Data and Analytics. It offers a comprehensive module that not only facilitates <br></br> 
        the comprehension of SQL, DataWareHouse, and Tableau concepts but also provides practical <br>
        </br>exposure on how to implement these concepts in real-time projects within the industry.</p>
        <br></br>
        
        <br></br>
        <button onClick={openModal}>Contact</button>
        <br></br>
        <br></br>
        <br></br>
        <div className="course">
          <div>
            <h4>Course</h4>
            <h4>Duration</h4>
            <h4>3.5 Months</h4>
          </div>
          <div>
            <h4>Learning</h4>
            <h4>Format</h4>
            <h4>Online Bootcamp</h4>
          </div>
          <div>
            <p>Rating</p>
            <p>******</p>
          </div>

        </div>
      </div>
      <div className="sideBar">
        <div>
          <img src="https://downtowncoders.com/assets/images/courses-details.jpg"/>
          <p>Tableau</p>
          <p>Advanced Data Analytics</p>
          <div className="price">
          <strike><p>Rs.44000</p></strike>
            <p>Rs.33000</p>
          </div>
          <button onClick={openModal}>Contact</button>

          <h1>Course Features</h1>
          <p>&#11106; Live Sessions</p>
          <p>&#11106; Industrial Projects</p>
          <p>&#11106; Agile Methodology </p>
        </div>
      </div>
      <div className="div3"></div>
      <Model isOpen={isModalOpen} onClose={closeModal} ></Model>
      </div>
    </div>
  );
};

export default APIDemo;
