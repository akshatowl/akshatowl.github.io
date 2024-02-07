import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from './Navbar';

function About() {
    return (
      <div className="Center">
      <div className="header-container">
      <div className="top-bar">
      </div>
      <br/>
    
    <h1>Experience</h1>
    <p>
    <p> I've researched and worked with robots a lot, I managed to gain some useful skills while trying to work<br/>
       on autonomous systems throughout my undergraduate degree. My primary area of work has been towards <br/>control systems and heuristic path-planning
       of Unmanned Aerial Vehicles and Unmanned Ground Vehicles.<br/></p>
    <div>
      <p>
      <ul>
      <li>Graduate Researcher, <a href="https://autonomy.engr.tamu.edu/" style={{ fontSize: '20px', display: 'inline', textDecoration: 'underline' }} target="blank">Autonomous Systems Laboratory</a>, Texas A&M University <i>Nov 2023 - Jan 2024</i></li>
        <li>Software Engineering Intern, <a href="https://www.analog.com/en/index.html" style={{ fontSize: '20px', display: 'inline', textDecoration: 'underline' }} target="blank">Analog Devices</a>, India <i>Jan 2023 - May 2023</i></li>
        <li>Undergraduate Research Intern <a href="https://www.mitacs.ca/en" style={{ fontSize: '20px',display: 'inline', textDecoration: 'underline' }} target="blank">(MITACS)</a>, MARS Lab, Ontario Tech University <i>May 2022 - Jul 2022</i></li>
        <li>Team Member,  <a href="https://www.mbzirc.com/" style={{ fontSize: '20px',display: 'inline', textDecoration: 'underline' }} target="blank">MBZIRC</a>  <i>Oct 2022 - Dec 2022</i></li>
        <li>Head of Automation, <a href="https://www.projectmanas.in/" style={{ fontSize: '20px',display: 'inline', textDecoration: 'underline' }} target="blank">Project MANAS</a> <i>April 2021 - Jul 2022</i></li>
        <li>Embedded Software Intern, <a href="https://aereo.io/" style={{ fontSize: '20px',display: 'inline', textDecoration: 'underline' }} target="blank">AEREO</a> , India <i>Aug 2021 - Nov 2022</i></li>
        
      </ul>
      </p>
    </div>
    </p>
    
    <h1>My Takeaways</h1>
        <h2>My time as a Graduate Researcher</h2>
        <p>During my fall semester in 2023, I was a actively working on a research project as a graduate student.<br/>
        I was part of the Autonomous Systems Lab under Dr. Sivakumar Rathinam and was working on path planning of<br/>
        autonomous non-holonomic agents in the presence of dynamic obstacles. The entire problem was formulated<br/>
        as a Mixed Integer Linear Programming (MILP) problem. I also made an intuitive interface for the solution<br/>
        using matplotlib animations in Python. This experience tested some of the mathematics concepts I never thought <br/>
        I would get to apply. It was challenging at first but being able to correlate some solving methods and geometrical<br/>
        solutions into the path-planning domain definitely helped me grow as a roboticist.</p>
       <h2>My time at Analog Devices</h2>
      <p>Before arriving for my Master's, I was a Software Engineering Intern at Analog Devices, India or ADI.<br/> 
       ADI was working on a Time-of-Flight sensor and the team I was interning with was selected to present  <br/>
       their idea at the global ADI GTC that happened in March 2023.</p>
      <p>
        I worked on making a simulation for my team using Robot Operating System and Gazebo Simulator.<br/>
        The simulation was of a 4-wheel skid-steer drive that streamed sensor data in a C++ script using<br/>
        ROStopics. I got to learn about modelling the physics of a physically realizable system while making this<br/>
        simulation. The package that I created was added as a meta-package to the main codebase. 
      </p>

      <p>ADI planned to port their current sensor into the Robot Operating System-2 environment, for which<br/>
       they needed to check for vulnerabilities. I found this to be a very good way to dip my feet into ROS-2.<br/>
       I wrote a script in C++ using OpenCV to transfer messages from one ROS-2 system instance to another, the <br/>
       existing system faced a lot of latency while receiving images and I helped improve it by reducing the<br/> 
       latency to about 67%. Working on something that was useful to the company felt empowering and motivating to me.
      </p>

    <h2>My time as an Undergraduate Researcher</h2>
    <p>I was an undergraduate research intern at Ontario Tech University under the guidance of Dr. Scott Nokleby<br/>
      in the <a href="http://mars.engineering.uoit.ca/" style={{ fontSize: '20px',display: 'inline', textDecoration: 'underline' }} target="blank">Mechatronic and Robotic Systems Laboratory (MARS Lab)</a>
       This experience was a research fellowship<br/> award to me by MITACS. The prompt of the project was to work on
       an autonomous wheelchair for children<br/> with disabilities like cerebral palsy. This was an experience that taught
       me a lot about the importance of <br/>software architecture for autonomous robots and how to conduct research. <br/>
      </p>
      <p>
        I worked on the D435i depth-camera by Intel for localization and to detect obstacles. One of the requirement<br/>
        was that slopes lower than a 15 degree incline should be traversable and not be treated like an obstalce. To<br/>
        solve this I first ventured into computer vision, I developed a methodology and implemented a python script <br/>calculated the slope of
        obstalces in front of the camera. Although, like many things I didn't get an accuracy of <br/>slope estimation that
        would let me call the task complete. So, after researching I narrowed down the likely cause<br/> to noise from the 
        camera and implemented a moving-average filter to help improve the accuracy to 98%.
      </p>
      <p>
        The main part of the project was designing the software architecture and implementation to make autonomous <br/>
        navigation successful. We decided to implement an algorithm called RRT* (Optimized Rapidly Exploring Random Trees)<br/>
        to perform navigation within the map. To avoid collision from unknown obstacles that aren't in the map but can exist<br/>
        (Eg. Trolleys or Humans walking around), we implemented a local planner using a Proportional-Derivative controller<br/>
        modelling the error function in such a way that it produces a controller effort that is inversely-porportional to<br/>
        the distance from the detected obstacle. 
      </p>
      <p>
        We also used a Turtlebot-3 Burger robot based on Raspberry Pi 4 and OpenCR to test the entire setup on hardware<br/> and were able to see that the algorithms
        worked successfully.
      </p>
      <h2>My time working at a UAV startup</h2>
      <p>In my 2nd year of college I got the opportunity to work at AEREO (Formerly Aarav Unmanned Systems). I got to work<br/>
      path-planning for Unammned Aerial Vehicles and autonomating testing procedures for them. I got exposure to open-source<br/>
      Frameworks and developing on top of an existing codebase. I got familiar with the Ardupilot flight-stack and worked on <br/>
      creating a Software-In-Loop testbench that was later integrated to a Ground Control Software using TCP and UDP. <br/>
      </p>
      <h2>My time working in Project MANAS</h2>
      <p>During my undergraduate degree I was part of Project MANAS, the robotics student project of MIT Manipal. During <br/>
      2021-2022 I led the automation front of the team for AUVSI SUAS 2022 and a driverless car for the Mahindra Rize Prize<br/>
      Challenge. I got to work hands on with a lot of sensor modules and communication protocols like I2C, UART, SPI, CAN   <br/>
      for autonomous robots. I worked quite a bit on the lateral controller of a driverless car and helped implement a <br/>
      modified Stanley Controller with feedforward for lane centering.
      </p>
      <h2>My time working for MBZIRC</h2>
      <p>I was part of Team Luna, representing India among the top 13 teams internationally as semi-finalists for the Mohamed <br/>
       Bin Zayed International Robotics Challenge (MBZIRC). I worked on Forward and Inverse Kinematics of 6-axis <br/>
      robotic arm on top of a surface vehicle as part of the competition prompt. <br/>
      
      </p>
      <hr/>
      <h1>What's next</h1>
      <p>I'm going to be working at Applied Material as a Software Engineering Intern this summer! I'm really excited for this<br/>
      opportunity since my domain of work is going to be along control systems design, which was my entry point to the field<br/>
      of robotics.<br/>
       </p>
    </div>
    
  </div>
      );
}

export default About;