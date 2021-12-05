import React from 'react';
import { addToDb } from '../Utlities/fakedb';

const Cosmetic = (props) => {
  

    const {about,age,company,_id}=props.cosmetic
    
    const handleClick=id=>{
        console.log(id);
        addToDb(_id);
    }



    return (
        <div>
            <h2>Company Name:{company}</h2>
            <p>_id:{_id}, Age:{age}</p>
            <p>About:{about}</p>
            <button onClick={()=>handleClick(_id)}> Clicked</button>

        </div>
    );
};

export default Cosmetic;