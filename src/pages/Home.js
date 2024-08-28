import React, { useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import htm from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import js from "../assets/tech/js.png";
import c from "../assets/tech/c.png";
import cpp from "../assets/tech/cpp.png";

import fire from "../assets/tech/fire.png";
import flu from "../assets/tech/flutter.png";
import mys from "../assets/tech/mysql.png";
import dart from "../assets/tech/dart.png";

import py from "../assets/tech/py.png";
import react from "../assets/tech/react.png";
import node from "../assets/tech/node.png";
import mongo from "../assets/tech/mongo.png";
import aws from "../assets/tech/aws.png";
import git from "../assets/tech/git.png";
import figma from "../assets/tech/figma.png";
import vd1 from "../assets/project/vdllm.mp4";
import vd2 from "../assets/project/vdnovac.mp4";
import gdsc from "../assets/gdsc.png";
import gdsc1 from "../assets/volunteer/1.webp";
import gdsc2 from "../assets/volunteer/2.webp";
import gdsc3 from "../assets/volunteer/3.webp";
import gdsc4 from "../assets/volunteer/4.webp";
import gdsc5 from "../assets/volunteer/5.webp";
import gdsc6 from "../assets/volunteer/6.webp";
import tinker from "../assets/tinker.png";
import th1 from "../assets/volunteer/tinker/th1.webp";
import th2 from "../assets/volunteer/tinker/th2.webp";
import th3 from "../assets/volunteer/tinker/th3.webp";
import th4 from "../assets/volunteer/tinker/th4.webp";
import th5 from "../assets/volunteer/tinker/th5.webp";
import mu from "../assets/download.png";
import g1 from "../assets/volunteer/g1.webp";
import g2 from "../assets/volunteer/g2.webp";
import g3 from "../assets/volunteer/g3.webp";
import { Link } from "react-router-dom";
import ReactGa from 'react-ga'



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function Home() {

  useEffect(()=>{
    ReactGa.pageview(window.location.pathname)
  },[])

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 3000,

    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,

          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,

          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="z-[1] relative home h-[100vh]">
      <div className="pt-4 md:pt-12 px-4 md:px-20 xl:px-40 flex gap-[10px] md:gap-[2rem] items-center">
        <h1 className="text-xl font-semibold text-[##8CC63F] hidden md:blcok">
          Connect me over
        </h1>

        <a href="https://www.linkedin.com/in/muhammed-alishihab-v-s-7639541a7/">
          <LinkedInIcon className="icon" />
        </a>
        <a href="https://github.com/shihab2000">
          <GitHubIcon className="icon" />
        </a>
        <a href="https://www.instagram.com/shihab_2408/">
          <InstagramIcon className="icon" />
        </a>

        <a href="mailto:vsshihabali@gmail.com">
          <EmailIcon className="icon" />
        </a>
      </div>
      <div className="px-8 md:px-20 xl:px-40 pt-52 md:pt-60">
        <h1 className="font-bold md:text-4xl mb-1 md:mb-4 text-[#8CC63F]">
          Hey !
        </h1>
        <h1 className="font-bold text-3xl md:text-6xl mb-8 text-[#e6facd] w-[90%]  md:w-[60%] xl:w-[50%]">
          I,m Muhammad Ali Shihab V S
        </h1>
        <p className="header-text text-sm md:text-xl text-[#ffffff] ">
          Driven software developer with a passion for innovation and a
          commitment to creating outstanding solutions.
        </p>
        <div className="hidden md:flex gap-8 flex-wrap my-12">
        <a href="#skills">
            <button className="btn">Skills</button>
          </a> 
          <a href="#projects">
            <button className="btn">Projects</button>
          </a>
          <a href="#volunteering">
            <button className="btn">Volunteering</button>
          </a>
        <a href="#aboutme">
            <button className="btn">About me</button>
          </a>          

                 </div>
        <div className="hidden md:flex gap-8 my-12">
        <a href="https://drive.google.com/file/d/17YDqkmSQ9GGsS9lms2yvAUPQI8rSI4ac/view?usp=sharing"><button className="btn">Resume</button></a>
          
        </div>
        <div className="flex md:hidden gap-2 flex-wrap my-8">
        <a href="#skills">
            <button className="btn">Skills</button>
          </a>
          <a href="#projects">
            <button className="btn">Projects</button>
          </a>
          <a href="#volunteering">
            <button className="btn">Volunteering</button>
          </a>
          <a href="#aboutme">
            <button className="btn">About me</button>
          </a>

          <a href="https://drive.google.com/file/d/17YDqkmSQ9GGsS9lms2yvAUPQI8rSI4ac/view?usp=sharing"><button className="btn">Resume</button></a>

          
          

        </div>

        <h1
          id="skills"
          className="font-bold text-3xl md:text-4xl pt-20 md:pt-40 text-[#8CC63F]"
        >
          I work with
        </h1>
        <div className="flex flex-wrap justify-start w-[100%] xl:w-[100%] gap-[2%] gap-[5%] xl:gap-[8%] tech mt-12 md:my-20">
          <img src={flu} alt="" />
          <img src={fire} alt="" />
          <img src={mys} alt="" />
          <img src={mongo} alt="" />
          <img src={htm} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={c} alt="" />
          <img src={cpp} alt="" />
          <img src={py} alt="" />
          <img src={dart} alt="" />

          <img src={react} alt="" />
          <img src={node} alt="" />
          <img src={aws} alt="" />
          

          <img src={git} alt="" />
          <img src={figma} alt="" />
        </div>

        <h1
          id="projects"
          className="font-bold text-3xl md:text-4xl pt-4 md:pt-40 text-[#8CC63F]"
        >
          Projects
        </h1>

        <div>
          <div className="flex my-8 md:my-20 flex-col md:flex-row">
            <div className="w-[100%] md:w-[40%]">
              {/* <img src={vd1} className=" shadow-1 " alt="" /> */}
              <video
      src={vd1}
      className="shadow-1"
      controls
      alt="Currency Analyser Video"
    />
            </div>
            <div className="md:pl-20 w-[100%] mt-12 md:mt-0 md:w-[60%]">
              <h1 className=" text-xl md:text-4xl font-semibold text-[#8CC63F]">
              Efficient Voice Embedding for LLM              </h1>
              <p className="mt-4 md:mt-12 text-sm md:text-lg font-medium text-[#00346C]">
              This project focused on developing a sophisticated voice-to-vector conversion methodology, optimized for integration with Large Language Models (LLMs). The goal was to enhance the chatbot's ability to handle customer queries efficiently and accurately.
              </p>
              <p className=" md:text-lg mt-4 text-[#4e4e4e]">
                <span className="text-[#00346C] font-bold">Tech stack :</span>{" "}
                Python, Flutter, Signal Processing Libraries
              </p>
              <p className="mt-4 md:text-2xl font-medium text-[#00346C]">
                Features
              </p>
              <div className="text-[#00346C] text-sm md:text-lg px-8">
                <ul className="" style={{ listStyleType: "disc" }}>
                  <li>Trained the chatbot to provide instant support to users, utilizing the optimized voice embeddings.
</li><li> Designed the system to handle a large volume of customer queries without compromising performance.
Outcome:
<li>Successfully reduced response latency in chatbot interactions by 30%.
</li>
<li>Demonstrated significant improvements in voice recognition accuracy, leading to better user satisfaction.</li>
</li>
                </ul>
              </div>
              {/* <p className="text-sm md:text-lg mt-4 font-bold text-[#4e4e4e]">
                <span className=" text-[#9900ff] font-medium">
                  Visit here :
                </span>{" "}
                <a href="https://trouvailler.com">
                  <u>Trouvailler.com</u>
                </a>
              </p> */}
            </div>
          </div>
          <hr />




          <div className="flex my-12 md:my-20 flex-col md:flex-row">
            <div className="w-[100%] md:w-[40%]">
              {/* <img src={vd2} className=" shadow-1 " alt="" /> */}
              <video     src={vd2}
      className="shadow-1"
      controls
      alt="Currency Analyser Video"
    />
            </div>
            <div className="md:pl-20 w-[100%] mt-12 md:mt-0 md:w-[60%]">
              <h1 className=" text-xl md:text-4xl font-semibold text-[#00346C]">
              Currency Analyser
              </h1>
              <p className="mt-4 md:mt-12 text-sm md:text-lg font-medium text-[#00346C]">
              Developed a currency detection tool tailored for the visually impaired, coupled with a calculator feature. This project aimed to improve accessibility by leveraging machine learning techniques for currency recognition.
              </p>
              <p className=" md:text-lg mt-4 text-[#00346C]">
                <span className="text-[#00346C] font-bold">Tech stack :</span>{" "}
                Python, OpenCV, TensorFlow, Flutter              </p>
              <p className="mt-4 md:text-2xl font-medium text-[#00346C]">
                Features
              </p>
              <div className="text-[#00346C] text-sm md:text-lg px-8">
                <ul className="" style={{ listStyleType: "disc" }}>
                  
               <li>Implemented machine learning models to accurately detect and identify different currencies based on images captured via mobile devices.</li>
               <li>Integrated text-to-speech functionality to assist visually impaired users in identifying currencies.</li> 
               <li>Provided an additional calculator feature for users to perform quick arithmetic operations on the detected currency values</li>
                <li> Worked closely with designers and accessibility experts to ensure the tool met the needs of its target audience.</li> 
                <li>Successfully published a paper detailing the methodologies and challenges of currency recognition using ML.</li>
                  
                  </ul>
              </div>
              {/* <p className="text-sm md:text-lg mt-4 font-bold text-[#4e4e4e]">
                <span className=" text-[#9900ff] font-medium">
                  Visit here :
                </span>{" "}
                <a href="http://bit.ly/3pPDCiP">
                  <u>bit.ly/3pPDCiP</u>
                </a>
              </p> */}
            </div>
          </div>
          <hr />
          <div className="flex my-12 md:my-20 flex-col md:flex-row">
            <div className="w-[100%] md:w-[40%]">
              {/* <img src={saron} className=" shadow-1 " alt="" /> */}
            </div>
            <div className="md:pl-20 w-[100%] mt-12 md:mt-0 md:w-[60%]">
              <h1 className=" text-xl md:text-4xl font-semibold text-[#00346C]">
              MILK CO App              </h1>
              <p className="mt-4 md:mt-12 text-sm md:text-lg font-medium text-[#00346C]">
              An application developed to automate the operations of a milk distribution office, streamlining processes from order management to delivery scheduling.
              </p>
              <p className=" md:text-lg mt-4 text-[#00346C]">
                <span className="text-[#00346C] font-bold">Tech stack :</span>{" "}
                Flutter, Firebase
              </p>
              <p className="mt-4 md:text-2xl font-medium text-[#00346C]">
                Features
              </p>
              <div className="text-[#00346C] text-sm md:text-lg px-8">
                <ul className="" style={{ listStyleType: "disc" }}>
                  
<li>Automated the order placement and tracking system, allowing customers to place orders directly through the app.</li>
<li>Integrated real-time inventory management, ensuring that stock levels were updated instantly as orders were processed.</li>
<li>Automated delivery routes and schedules, optimizing logistics and reducing operational costs.</li>
<li>Designed an intuitive UI/UX to simplify operations for both the office staff and customers.</li>
<li>Achieved a 40% reduction in manual errors related to order processing and delivery.</li>
                  </ul>
              </div>



              {/* <p className="text-sm md:text-lg mt-4 font-bold text-[#4e4e4e]">
                <span className=" text-[#9900ff] font-medium">
                  Visit here :
                </span>{" "}
                <a href="https://saron.in">
                  <u>Saron.in</u>
                </a>
              </p> */}
            </div>
          </div>
        </div>

        <h1
          id="volunteering"
          className="font-bold text-3xl md:text-4xl pt-4 md:pt-40 text-[#8CC63F]"
        >
          Volunteering
        </h1>
        <div className="my-12 md:my-20">
          <div className="md:mb-28">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <h1 className="text-lg md:text-2xl font-semibold text-[#8CC63F]">
                Google Developer Student Clubs Lead
              </h1>
              <img src={gdsc} className="w-[80%] md:w-[30%]" alt="" />
            </div>
            <div>
              <p className="text-sm md:text-lg mt-8 md:mt-16 text-[#00346C]">
                I have been selected as the GDSC Lead for the year 2021-22, and
                with this opportunity, I am determined to establish a thriving
                GDSC Chapter in my college. Through this role, I have been
                fortunate to connect with numerous Googlers, learning from their
                expertise and gaining valuable insights. Additionally, I have
                had the privilege of participating in events and workshops
                organized in collaboration with Google Developers. Together with
                my dedicated team, we have successfully conducted a series of
                technical events and workshops, creating an engaging environment
                for students to learn and grow.
              </p>
            </div>
            {/* <div className="my-12">
              <div>
                <Slider {...settings}>
                  <img className="" src={gdsc1} alt="" />
                  <img src={gdsc2} alt="" />

                  <img src={gdsc3} alt="" />
                  <img src={gdsc4} alt="" />

                  <img src={gdsc5} alt="" />
                  <img src={gdsc6} alt="" />
                </Slider>
              </div>
            </div> */}
          </div>

          <hr />

          <div className="my-12 md:my-28">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <h1 className="text-lg md:text-2xl font-semibold text-[#8CC63F]">
                TinkerHub Campus Lead
              </h1>
              <img
                src={tinker}
                className="w-[30%] md:w-[10%] mt-4 md:mt-0"
                alt=""
              />
            </div>
            <div>
              <p className="text-sm md:text-lg mt-8 md:mt-16 text-[#00346C]">
                During the academic year of 2020-21, I had the privilege of
                serving as the campus lead for the TinkerHub chapter at our
                college. This experience marked the beginning of my journey into
                volunteering and connecting with a wonderful community. As a
                team, we organized numerous tech events and workshops, providing
                valuable opportunities for students to enhance their skills and
                knowledge. It was particularly enriching to connect with
                industry professionals, learning from their expertise and
                gaining insights into the real-world applications of technology.
                In addition to our internal activities, we also took the
                initiative to conduct inter-college events, fostering a spirit
                of healthy competition and collaboration among students from
                various institutions.
              </p>
            </div>
            {/* <div className="my-12">
              <div>
                <Slider {...settings}>
                  <img className="" src={th1} alt="" />
                  <img src={th2} alt="" />

                  <img src={th3} alt="" />
                  <img src={th4} alt="" />

                  <img src={th5} alt="" />
                </Slider>
              </div>
            </div> */}
          </div>

          <hr />

          {/* <div className="my-12 md:my-28">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <h1 className="text-lg md:text-2xl font-semibold text-[#9900ff]">
                Campus ambassador and district coordinator of GTech muLearn{" "}
              </h1>
              <img
                src={mu}
                className="w-[50%] md:w-[20%] mt-4 md:mt-0"
                alt=""
              />
            </div>
            <div>
              <p className="text-sm md:text-lg mt-8 md:mt-16 text-[#4e4e4e]">
                During my tenure as a Campus Ambassador and District Coordinator
                for Gtech Mularn, a vibrant community that strives to bridge the
                gap between students and the industry, I had the incredible
                privilege of spearheading various events aimed at nurturing
                technical expertise and equipping students with the skills
                necessary for a successful transition into the professional
                realm. These events provided invaluable opportunities for
                students to connect with experienced mentors from diverse
                industries, enabling them to gain invaluable insights and learn
                directly from those who have already established themselves in
                their respective fields. 
              </p>
            </div>
            <div className="my-12">
              <div>
                <Slider {...settings}>
                  <img className="" src={g1} alt="" />
                  <img src={g2} alt="" />

                  <img src={g3} alt="" />
                </Slider>
              </div>
            </div>
          </div> */}

          <hr />

          <h1
            id="aboutme"
            className="font-bold text-4xl pt-12 md:pt-40 text-[#8CC63F]"
          >
            About me
          </h1>
          <p className="text-sm md:text-xl mt-16 text-[#00346C]">
            {" "}
            A highly motivated software engineer with a diverse skill set in programming and software development. Proficient in languages like C, Java, Python, HTML, CSS, JavaScript, MySQL, and PHP, as well as app development using Flutter and Dart with a Firebase backend. </p>
          <p className="text-sm md:text-xl mt-4 text-[#00346C]">
          I have a strong background in full-stack development, utilizing my expertise to create robust and scalable applications. My experience includes working as a developer intern, where I gained hands-on experience in both front-end and back-end development, database management, and deployment </p>
          <p className="text-sm md:text-xl mt-4 text-[#00346C]">
          Additionally, I have a proven track record of effective teamwork and conflict management as a National Service Scheme (NSS) volunteer. My problem-solving skills are complemented by my knowledge in SDLC execution, software engineering tools, relational databases, SQL, ORM technologies, and familiarity with test-driven development and web application frameworks. </p>
          
          
          <p className="text-sm md:text-xl mt-4 text-[#00346C]">

          I am passionate about developing in regulated environments and am committed to continuous learning, staying at the forefront of emerging technologies. Eager to take on new challenges, I am always seeking opportunities to push the boundaries of my abilities and contribute effectively to any software development team.





</p>

          <h1 className="font-bold text-base md:text-2xl  mt-12 text-[#8CC63F]">
            Here's my Resume
          </h1>
          <a className="" href="https://drive.google.com/file/d/17YDqkmSQ9GGsS9lms2yvAUPQI8rSI4ac/view?usp=sharing"><button className="btn">Resume</button></a>

          <hr />
          <div className=" pt-8 pb-8 md:pt-12 md:pb-28 flex gap-[2rem] justify-center md:justify-start items-center">
            <h1 className="hidden md:blcok text-xl font-semibold text-[#8CC63F]">
              Connect me over
            </h1>
            <a href="https://www.linkedin.com/in/muhammed-alishihab-v-s-7639541a7/">
          <LinkedInIcon className="icon" />
        </a>
        <a href="https://github.com/shihab2000">
          <GitHubIcon className="icon" />
        </a>
        <a href="https://www.instagram.com/shihab_2408/">
          <InstagramIcon className="icon" />
        </a>

        <a href="mailto:vsshihabali@gmail.com">
          <EmailIcon className="icon" />
        </a>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
