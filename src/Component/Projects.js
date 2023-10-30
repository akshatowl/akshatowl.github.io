import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from './Navbar';

function Projects() {
    return (
        <div className="projects-container">
        <div className="Center">
        <div className="header-container">
        <div className="top-bar">
        </div>
        <br/>
    <h1>Projects</h1><br/>
    <div>
    <h2>This Website</h2>
      <p>I always wanted to have my own website to have the ability to showcase<br/>
      the things I was doing. I decided to take this up as a personal project.<br/>
      With multiple failed compilations and a lot of debugging sessions, I finally <br/>
      came up with something I feel good about. I'm currently working on making this<br/>
      website more responsive for mobile devices as well. I'm open to any suggestions! <br/>

      
      </p>
    </div>
    <div>
    <h2>Chatbot with embeddings: Ongoing</h2>
      <p>I'm currently working on making a chatbot using embeddings and vector search<br/>
      for making ChatGPT effective for specialized research topics.
      </p>
    </div>
    <div>
    <h2>Kalman Filters for Reinforcement Learning: Ongoing</h2>
      
      <p>Working towards using Kalman Filters to optimize Bellman updates for Reinforcement<br/>
      learning algorithms to optimize Neural Architecture Search.
      </p>
    </div>
    <hr/>
    <div>
    <h2>Seraphim</h2>
      <div className="image-container">
        <img className="project-image" src="/Images/seraphim.png" alt="" />
      </div>
      <p>Seraphim is a project I was a part of during my time at Project MANAS. Seraphim is an <br/>
      autonomous hexacopter based on the PX4 flight stack and is capable of autonomous waypoint<br/> 
      navigation and object detection through a camera module. Seraphim maintains a thrust to <br/>
      weight ratio of 2:1 while take-off. Seraphim can also carry a payload of upto 7 kg.<br/><br/>
      <a href="https://www.youtube.com/watch?v=CQ0x2UGOluc" style={{ fontSize: '20px', display: 'inline', textDecoration: 'underline' }} target="blank">See it here!</a>
      </p>
    </div>
    <hr/>
    <div>
    <h2>KOBU</h2>
    <div className="image-container">
        <img className="project-image" src="/Images/kobu.png" alt="" />
      </div>
      <p>KOBU is an a system of 3 differential-drive robots that aims to achieve multi-robot<br/>
      coverage planning using the concept of space-filling curves like Peano and Hilbert's <br/>
      curves. This was implemented using ROS and Gazebo using C++.<br/><br/>
      <a href="https://github.com/raghavthakar/kobu" style={{ fontSize: '20px', display: 'inline', textDecoration: 'underline' }} target="blank">See it here!</a>
      
      </p>
    </div>
    <hr/>
    <div>
    <h2>Drone Simulation</h2>
    <div className="image-container">
        <img className="project-image" src="/Images/dpo.png" alt="" />
      </div>
      <p>I made a simulation to visualize the flight of a quadcopter in Gazebo using ROS. This<br/>
       was a Software-In-Loop testbench I made to send coordinates through a vector in C++<br/>
       to the PX4 flight stack.<br/><br/>
       <a href="https://github.com/akshatowl/Drone-path-optimizer" style={{ fontSize: '20px', display: 'inline', textDecoration: 'underline' }} target="blank">See it here!</a>
      </p>
    </div>
    <hr/>
    <div>
    <h2>Slope Detection</h2>
    <div className="image-container">
        <img className="project-image" src="/Images/sloped.png" alt="" />
      </div>
      <p>I worked on implementing slope detection of incident objects through a depth-camera sensor<br/>
       in python and OpenCV. The script was coverted into publishing the slopes calculated through <br/>ROStopics.<br/><br/>
       <a href="https://github.com/akshatowl/VisualSlopeDetection" style={{ fontSize: '20px', display: 'inline', textDecoration: 'underline' }} target="blank">See it here!</a>

      </p>
    </div>
    <hr/>
    <div>
    <h2>Iterative Inverse Kinematics</h2>
    <div className="image-container">
        <img className="project-image" src="/Images/ik.png" alt="" />
      </div>
      <p>This was an implementation of iterative inverse kinematics techniques using Jacobian matrices.<br/>
       I used Newton Raphson root solving method to achieve convergence of a 3 DoF RRR robotic arm. <br/><br/>
       <a href="https://github.com/akshatowl/Iterative-Inverse-Kinematics" style={{ fontSize: '20px', display: 'inline', textDecoration: 'underline' }} target="blank">See it here!</a>

      </p>
    </div>
    <hr/>
    <div>
    <h2>SHELFY</h2>
    <div className="image-container">
        <img className="project-image" src="/Images/shelfy.png" alt="" />
      </div>
      <p>My team took part in the Swadeshi Microprocessor Challenge, hosted by the Govt. of India,<br/>
      Ministry of Electronics and Information Technology. We were the national semi-finalists and <br/>
      amoung the top 100 teams out of 3000+ participants. The team was given an indiginous FPGA board<br/>
      to develop a product. We chose to build a smart automated storage and retrieval system for <br/>
      warehouse automation. <br/><br/>
      <a href="https://drive.google.com/drive/folders/1kyhjSSxPe-VHb6vZ4yJiy1ic7FTwPgd0" style={{ fontSize: '20px', display: 'inline', textDecoration: 'underline' }} target="blank">See it here!</a>

      </p>
    </div>
    
</div>
    </div>
    </div>

      );
}

export default Projects;