
import {useEffect,useState} from 'react'
import firedata from '../Services/Database'
import {set,ref, onValue} from 'firebase/database'
import './css/ProjectCard.css'
function ProjectCard(props)
{
    const [MySkills,setSkill]=useState([]); 
    const [skillImage,setSkillImage]=useState("");








    
    useEffect(()=>{
        onValue(ref(firedata,'Skill'),(snapshot)=>{
           
          setSkill(snapshot.val());
          //console.log(snapshot.val());

        },[MySkills])

      

        MySkills.forEach(ele => {
            console.log(props.skill)
            if(props.skill==ele['skillName'])
            {
                setSkillImage(ele['skillImage'])
              
            }
        });


      
    },)
return (
<a  href={props.link} style={{textDecoration:'none'}}>
<div className='projectcard' >
<img src={skillImage} style={{height:40,width:40,padding:10}}></img>
<h5 style={{fontSize:20}}>{props.name}</h5>
</div>
</a>
);

}


export default ProjectCard;