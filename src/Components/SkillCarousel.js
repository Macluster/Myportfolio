import React from "react";

import {useEffect,useState} from 'react'
import firedata from '../Services/Database'
import {set,ref, onValue} from 'firebase/database'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SkillCard from '../Components/SkillCard';
import './css/SkillCarousel.css'

import leftarrow from "../assets/left.png";
import rightarrow from "../assets/right.png";


function SkillCarousel(props) {
  const [count, setcount] = useState(0);


  const [MySkills,setSkill]=useState([]); 




  useEffect(()=>{
    onValue(ref(firedata,'Skill'),(snapshot)=>{
       
      setSkill(snapshot.val());
      //console.log(snapshot.val());

    },[])

   


  
},)



  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
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
            
    
            MySkills.map((item) => (
                <SkillCard image={item['skillImage']}></SkillCard>
        ))}
      </Slider>
    </div>
  );
}



export default SkillCarousel;
