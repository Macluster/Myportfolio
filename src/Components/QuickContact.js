import { useState,useEffect } from 'react';
import './css/QuickContact.css'
import firedata from "../Services/Database";
import { set, ref, onValue, push } from "firebase/database";
function QuickContact() {

  const [count, setcount]=useState(0);
  useEffect(() => {
    onValue(
      ref(firedata, "Messages/counter"),
      (snapshot) => {
       setcount(snapshot.val());
        console.log(snapshot.val());
      },
     {onlyOnce:true}
    );
  });

  function addMessage(mailid ,mesg) {
 
      //set(ref(firedata, "Messages/"+count.toString()), { email: mailid,message:mesg });
      push(ref(firedata, "Messages"), { email: mailid,message:mesg })
     // set(ref(firedata, "Messages/counter"),(parseInt(count)+1).toString());
      
      alert("Message Succefuly sent")
    
 
  }

  const [message, setmessage]=useState("");
  const [email,setEmail]=useState("");
    return (
      <div className="QuickContactDiv" data-aos="zoom-in">
        <h4 className="QuickContact" style={{ color: "white" }}>
          Ouick Contact
        </h4>
        <input
        value={email}
          className="QuickContactEmail"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <textarea
        value={message}
          className="QuickContacMessage"
          type="text"
          placeholder="Message"
          rows={6}
          onChange={(e) => setmessage(e.target.value)}
        ></textarea>
         <div style={{ height: 40 }}></div>
        <div className="QuickContactButton"  onClick={()=>addMessage(email,message)}>Send Message</div>
      </div>
    );
  }

  export default QuickContact;