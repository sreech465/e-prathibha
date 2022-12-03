import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'



 function Products() {

    const [users, setusers] = useState([]);

  

    export const getData = ({email,password,name,phone,confirmPassword})=>{
      console.log(password)
      console.log(email)
  
      const formData = new FormData();
      console.log('data in form ', formData)
      formData.append('email',email)
      formData.append('password',password)
      formData.append('name',name)
      formData.append('phone',phone)
      formData.append('confirmPassword',confirmPassword)
  
      const headers = {'Content-Type':'application/json'}
      return async (dispatch)=>{
          await axios.post("http://test.e-prathibha.com/apis/login",formData,headers)
          .then(res=>{console.log("response from api",res.data)
    useEffect(() => {
        getData();
     
    }, [])
    return (
        <div>
            <div className='container  py-5'>
                <div className='row'>
                    {
                        users && users.length > 0 && users.map((user) => (
                            <div className='col-md-3'>
                                <Link to={`/products/${user.id}`}>

                                    <div className="card">
                                        <img className="card-img-top" src={user.picture} alt="Card image cap" />
                                      <span className='btn btn-info'>GET DETAILS</span>
                                    </div>

                                </Link>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
export default Products;