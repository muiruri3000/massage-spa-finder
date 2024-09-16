import { useState } from 'react';


let idNext = 0;
export function Form(){

    const [formData, setFormaData] = useState({
        name :'',
        lname:'',
        phone:'',
        email:'',

    })
  
    const [personalDetails, setPersonalDetails] = useState([]);


    function addFormData(e){
        const {name,value} = e.target;
        setFormaData({
            ...formData,
            [name]:value
        });
    }
   
    function personalDetailsList(e){
        e.preventDefault();
        setPersonalDetails([
            ...personalDetails,
            {
                id : idNext++,
                fname:formData.name,
                lname:formData.lname,
                phone:formData.phone,
                email:formData.email
            }
        ]);

      setFormaData({
        name:'',
        lname:'',
        email:'',
        phone:''
      })
    }

return(
    <>

    <form className='Form'>
        <label>First Name: <input name='name' value={formData.name} onChange={(e)=>addFormData(e)}/></label><br />
        <label>Last Name: <input name='lname' value={formData.lname} onChange={(e)=>addFormData(e)}/></label><br />
        <label>Email: <input name='email' value={formData.email} onChange={(e)=>addFormData(e)}/></label><br />
        <label>Phone: <input name='phone' value={formData.phone} onChange={(e)=>addFormData(e)}/></label><br />
        <button className='btn' onClick={(e)=>personalDetailsList(e)}>Save Details</button>

    </form>


    {console.log(personalDetails)}
    </>
)
}