import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux/es/exports'




function Home1() {

    const [users1 , setUsers1] = useState({});
    const {id} =  useParams();

const getTheList = ()=>{

     headers = {'Content-Type':'application/json',
    'server_key' : '3w99V63pW7tJ7vavGXtCKo8cp','id':'','tokenu':''}


   


   return async()=>{
      await axios.get(`https://e-prathibha.com/apis/start_exam?examId=${id}`,headers)
    .then(response2=>{console.log("response from api",response2.data)})
    setUsers1(response2);
    };
  
    
  }

  useEffect(()=>{
    getTheList();
  })

  
  
  return (
    <div>

<div className='container'>
    {
        Object.keys(users1).length>0 ? (
            <div className='row border border-primary mt-2'>
                <div className='col-md-6' >
                    <img style={{width:'160px',height:'250px'}}className= 'img-fluid p-5' src={users1.picture} alt={users1.title} />
                    </div>

                    <div className='col-md-6'>
                      <div className='mt-2'>
                      <p className='p-3 fst-italic'>Phone:{users1.phone}</p>
                      </div>
                      <div className='product_price'>
                       <span className='bg-info p-2 text-white fw-lighter'>EMAIL: {users1.email}</span>
                      </div>
                      <div className='product_Category'>
                       <h2 className='py-3 fw-lighter'>firstName: {users1.firstName}  lastName: {users1.lasttName}</h2>
                      </div>

                      <div className='product_description'>
                       <p className='py-3 fw-bolder'>Gender: {users1.gender}   DOB: {users1.dateOfBirth}</p>
                      </div>

                      <div className='product_rating'>
                       <p className='py-3 fw-normal'>Title: {users1.title}</p>
                  
                      </div>

                      <div className='product_rating'>
                       <p className='py-3'>STREET: {users1.location.street}  CITY: {users1.location.city} STATE: {users1.location.state}</p>
                  
                      </div>


                      

                    </div>

                   

                  

            </div>
        ):null
    }

</div>


    </div>
  )
}

export default Home1