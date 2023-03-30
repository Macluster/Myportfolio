import React from "react";

import {useEffect,useState} from 'react'
import firedata from '../Services/Database'
import {set,ref, onValue} from 'firebase/database'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProjectCard from '../Components/ProjectCard';
import './css/SkillCarousel.css'

import leftarrow from "../assets/left.png";
import rightarrow from "../assets/right.png";


function ProjectCarousel(props) {
  const [count, setcount] = useState(0);

  const [MyProjects, setProjects] = useState([]);




  useEffect(()=>{

    var li=[];
    onValue(
        ref(firedata, "Projects"),
      
        (snapshot) => {
          snapshot.forEach(e=>{li.push(e.val())})
        
          setProjects(li);
          console.log(MyProjects)
          
          //console.log(snapshot.val());
        },
        { onlyOnce: true }
      );


      
   


  
},)



  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ],
 
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ height: 100, width: 50, zIndex: 9 }}
        onClick={onClick}
      >
        <img src={rightarrow} height={50} width={50}></img>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ height: 100, width: 50, zIndex: 9 }}
        onClick={onClick}
      >
        <img src={leftarrow} height={50} width={50}></img>
      </div>
    );
  }
  

  return (
    <div style={{


    display:"flex",
    flexDirection:"column",


    }}>
      <Slider {...settings} >
        {

          
            
    
            MyProjects.map((item) => (
                <ProjectCard
                name={item["projectName"]}
                skill={item["projectTechnology"]}
                link={item["projectLink"]}
              ></ProjectCard>
        ))}
      </Slider>
    </div>
  );
}



export default ProjectCarousel;
