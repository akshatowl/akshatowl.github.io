import React, {Component, Fragment} from 'react';
import { BrowserRouter, Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Navbar from './Navbar';

export default function Home() {
  return (
    <div className="Center">
        <div className="header-container">
        <div className="top-bar">
        </div>
      <h1>Hi! I'm Akshat. Thanks for dropping by!</h1>
      <p> I'm currently a first year Master's student at Texas A&M University pursuing Computer Engineering.<br/>
         During my time as a Master's student till now I've gotten the opportunity to expand my knowledge <br/>horizon 
        with experimentation and personal research. I'm currently using Deep Reinforcement Learning <br/> for Neural Architecture Search.
        I'm also working on implementing vector search for Large Language<br/> Models
         to optimize them for domain specific research.</p>
        <p>In the past 4 years of my undergraduate studies I was extensively involved in robotics, particularly<br/>
         autonomous path-planning and optimal control of Unmanned Aerial and Ground Vehicles. </p>
      <div className="image-container">
        <img className="special-image" src="/Images/photograph.jpg" alt="" />
      </div>
      <div className="Center">
          <p>I'm a robotics and software enthusiast. Feel free to reach out! </p>
      </div>
      <div className="icon-image-container">
          {/* Gmail */}
          <a href="mailto:akshatpandeyplus41@gmail.com" target="blank">
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/gmail.png" alt="" style={{scale: '0.7'}}/>
        <div className="image-overlay">Gmail</div>
        </div>
        </a>
        {/* Linkedin */}
        <a href="https://www.linkedin.com/in/akshat-pandey24/" target="blank">
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/linkedin.png" alt="" style={{scale: '0.7'}}/>
        <div className="image-overlay">LinkedIn</div>
        </div>
        </a>
          {/* Github */}
          <a href="https://github.com/akshatowl" target="blank">
          <div className="image-with-overlay">
        <img className="skill-image" src="/Images/github.png" alt="" style={{scale: '0.7'}}/>
        <div className="image-overlay">Github</div>
        </div>
        </a>
        </div>
        
      <div className="Center">
        <h2>Tech stacks I've worked with</h2><br/>       
      </div>
      <div className="Center">
        <p>Programming Languages</p>
      </div>
        <div className="skill-image-container">
          {/* C */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/c.png" alt="" />
        <div className="image-overlay">C</div>
        </div>
        {/* C++ */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/cpp.png" alt="" />
        <div className="image-overlay">C++</div>
        </div>
        {/* Python */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/python.png" alt="" />
        <div className="image-overlay">Python</div>
        </div>
        {/* Java */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/java.png" alt="" />
        <div className="image-overlay">Java</div>
        </div>
        {/* Matlab */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/matlab.png" alt="" />
        <div className="image-overlay">MATLAB</div>
        </div>
       
      </div>
      <hr/>
      <div className="Center">
        <p>Web/App based tech stacks</p>
      </div>
      <div className="skill-image-container">
        {/* HTML */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/html.png" alt="" />
        <div className="image-overlay">HTML</div>
        </div>
        {/* CSS */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/css.png" alt="" />
        <div className="image-overlay">CSS</div>
        </div>
        {/* javascript */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/javascript.png" alt="" />
        <div className="image-overlay">Javascript</div>
        </div>
        
        {/* React */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/react.png" alt="" />
        <div className="image-overlay">React JS</div>
        </div>
        {/* MySQL */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/mysql.png" alt="" />  
        <div className="image-overlay">MySQL</div>
        </div>
        {/* Firebase */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/firebase.png" alt="" />
        <div className="image-overlay">Firebase</div>
        </div>
        {/* MongoDB */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/mongodb.png" alt="" />
        <div className="image-overlay">MongoDB</div>
        </div>
        
        
         
         
      </div>
      <hr/>
      <div className="Center">
        <p>Robotics</p>
      </div>
      <div className="skill-image-container">
        {/* ROS-1 */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/ROS-1.png" alt="" style={{ width:200}}/>
        <div className="image-overlay">Robot Operating Systems</div>
        </div> 
        {/* ROS-2 */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/ROS2.jpg" alt="" style={{ width:250}}/>
        <div className="image-overlay">Robot Operating Systems 2</div>
        </div> 
        {/* Gazebo */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/gazebo.png" alt=""/>
        <div className="image-overlay">Gazebo Simulator</div>
        </div> 
        {/* Coppelia Simulator */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/coppelia.png" alt=""/>
        <div className="image-overlay">Coppelia Simulator</div>
        </div>
      </div>
      
      <br/>
      <div className="Center">
        <p>Open Source Frameworks</p>
      </div>
      <div className="skill-image-container">
        {/* OpenCv */}
      <div className="image-with-overlay">
        <img className="skill-image" src="/Images/opencv.png" alt=""/>
        <div className="image-overlay">OpenCV</div>
        </div>
        {/* OpenAI */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/openai-logomark.png" alt=""/>
        <div className="image-overlay">OpenAI - Gymnasium</div>
        </div>
        {/* Pytorch */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/pytorch.png" alt=""/>
        <div className="image-overlay">Pytorch</div>
        </div>
        {/* Moveit */}
        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/moveit.png" alt="" style={{ width:250}}/>
        <div className="image-overlay">Moveit!</div>
        </div>
      </div>
      <hr/>
        
      <div className="Center">
        <p>Microprocessors / Hardware boards I've worked with</p>
      </div>
    <div className="Center">
      <div className="skill-image-container">
      <div className="image-with-overlay">
        <img className="skill-image" src="/Images/arduino.png" alt=""/>
        <div className="image-overlay">Arduino</div>
        </div>

      <div className="image-with-overlay">
        <img className="skill-image" src="/Images/raspberry.png" alt=""/>
        <div className="image-overlay">Raspberry Pi</div>
        </div>

        <div className="image-with-overlay">
        <img className="skill-image" src="/Images/nvidia.png" alt=""/>
        <div className="image-overlay">Nvidia Xavier/Jetson</div>
        </div>
       
        <br/>
        <br/>
        </div>
      </div>
      </div>
    </div>

  );
}

  