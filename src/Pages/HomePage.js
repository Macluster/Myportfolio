import "../css/HomePage.css";

import img from "../assets/img.png";
import SkillCard from "../Components/SkillCard";
import ProjectCard from "../Components/ProjectCard";
import { useEffect, useRef, useState } from "react";
import firedata from "../Services/Database";
import { set, ref, onValue } from "firebase/database";
import SkillCarousel from "../Components/SkillCarousel";
import ProjectCarousel from "../Components/ProjectCarousel";
import QuickContact from "../Components/QuickContact";

function HomePage() {
  const [MySkills, setSkill] = useState([]);
  const [MyProjects, setProjects] = useState([]);
  const [visits, setvisits] = useState([]);
  const [aboutme, setaboutme] = useState(" ");
  const [Moreaboutme, setmoreaboutme] = useState(" ");

  const aboutmeRef = useRef(null);
  const projectRef = useRef(null);
  const contectRef = useRef(null);



 

  const scrolltoref = (menuRef) => {
    console.log("asffafafasfafasfasf")
    window.scrollTo({
      top: menuRef.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    onValue(
      ref(firedata, "Skill"),
      (snapshot) => {
        setSkill(snapshot.val());
        //console.log(snapshot.val());
      },
      { onlyOnce: true }
    );
    onValue(
      ref(firedata, "ProfileVisits/count"),
      (snapshot) => {
       setvisits(snapshot.val());
       
        

      },
     {onlyOnce:true}
    );
    onValue(
      ref(firedata, "Projects"),
      (snapshot) => {
        setProjects(snapshot.val());
        //console.log(snapshot.val());
      },
      { onlyOnce: true }
    );

    onValue(
      ref(firedata, "AboutMe/val"),
      (snapshot) => {
       setaboutme(snapshot.val());
        //console.log(snapshot.val());
      },
      { onlyOnce: true }
    );

    onValue(
      ref(firedata, "MoreAboutMe/val"),
      (snapshot) => {
       setmoreaboutme(snapshot.val());
        console.log(snapshot.val());
      },
      { onlyOnce: true }
    );
  });


  return (
    <div className="Body">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
    

      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@200&display=swap"
        rel="stylesheet"
      />
      <div
        className="TopBar"
        style={{
          zIndex: 7,
        
          display: "flex",
          justifyContent: "center",
          width: "100%",
          position: "fixed",
          backgroundColor: "lightblue",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: 300,
          }}
        >
          <button style={{ backgroundColor: "transparent", border: "none" }}>
            <h4
              style={{ color: "white" }}
              onClick={() => scrolltoref(aboutmeRef)}
            >
              About Me
            </h4>
          </button>

          <button style={{ backgroundColor: "transparent", border: 0 }}>
            {" "}
            <h4
              style={{ color: "white" }}
              onClick={() => scrolltoref(projectRef)}
            >
              Projects
            </h4>
          </button>

          <button style={{ backgroundColor: "transparent", border: 0 }}>
            <h4
              style={{ color: "white" }}
              onClick={() => scrolltoref(contectRef)}
            >
              Contact Me
            </h4>
          </button>
        </div>
      </div>
      <div style={{ height: 50 }}></div>
      <div className="HeaderDiv">
        <div style={{}}>
          <div style={{}} data-aos="zoom-in">
            <h1 style={{}}>Hi I am Deepak Denny</h1>
            <h5 style={{ fontFamily: "Anek Devanagari" }}>
              {aboutme}
            </h5>
            <div style={{ height: 50 }}></div>
            <div
              className="hiremeButton"
              onClick={() => scrolltoref(contectRef)}
              style={{
                backgroundColor: "rgb(191, 145, 221)",
                height: 35,
                width: 100,
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                color: "white",
              }}
            >
              Hire Me
            </div>
          </div>
          <img data-aos="zoom-in" src={img} style={{}}></img>
        </div>
      </div>
      <div style={{ height: 100 }}></div>
      <div className="paddingDiv">
        <div ref={aboutmeRef} data-aos="fade-down" className="MoreAboutMeDiv">
          <h2  style={{ color: "rgb(129, 52, 144)" }}>
            More about Me
          </h2>
          <h3
            style={{
              color: "rgb(129, 52, 144)",
              padding: 25,
              fontFamily: "Anek Devanagari",
            }}
          >
          {Moreaboutme}
          </h3>
        </div>
        <div style={{ height: 150 }}></div>

        <div className="SkillsDiv" data-aos="fade-right">
          <h2 style={{color:"rgb(129, 52, 144)"}}>Skills</h2>
          <div style={{}}>
            <div style={{ height: "auto", width: "84%" }}>
              <SkillCarousel skillList={MySkills}></SkillCarousel>
            </div>
          </div>
        </div>

        <div style={{ height: 100 }}></div>

        <div ref={projectRef} className="SkillsDiv" data-aos="fade-right">
          <h2 style={{color:"rgb(129, 52, 144)"}}>Projects</h2>

          <div style={{}}>
          <div style={{ }}>
              <ProjectCarousel></ProjectCarousel>
            </div>
          </div>
        </div>

        <div style={{ height: 200 }}></div>

        <div ref={contectRef}>
          <QuickContact></QuickContact>
        </div>
        <div style={{ height: 100 }}></div>

        <div data-aos="zoom-in"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <a href="https://www.instagram.com/deepakjudejohn/">
            <div
              style={{
                height: 70,
                width: 70,
                borderRadius: 35,
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "50%", width: "50%" }}
                src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
              ></img>
            </div>
          </a>
          <div style={{ width: 50 }}></div>
          <a href="https://www.facebook.com/deepak.denny.98">
            {" "}
            <div
              style={{
                height: 70,
                width: 70,
                borderRadius: 35,
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "50%", width: "50%" }}
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              ></img>
            </div>
          </a>
          <div style={{ width: 50 }}></div>
          <a href="https://github.com/Macluster">
            {" "}
            <div
              style={{
                height: 70,
                width: 70,
                borderRadius: 35,
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "50%", width: "50%" }}
                src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png"
              ></img>
            </div>
          </a>
        </div>
        <div style={{ height: 200 }}></div>
      </div>
 
    </div>
  );
}

export default HomePage;
