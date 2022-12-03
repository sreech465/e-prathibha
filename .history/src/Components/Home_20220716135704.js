// import React, {  useEffect } from 'react'

// import { useDispatch } from 'react-redux';


// import { Link } from 'react-router-dom'



//  function Home() {

 

//     const dispatch = useDispatch();

//           useEffect(() => {
//             dispatch(getData());
         
//         }, [])
    
//     return (
//         <div>
//             <div className='container  py-5'>
//                 <div className='row'>
//                     {
//                         users2 && users2.length > 0 && users2.map((user) => (
//                             <div className='col-md-3'>
//                                 <Link to={`/Home/${users2.id}`}>

//                                     <div className="card">
//                                         <img className="card-img-top" src={user.picture} alt="Card image cap" />
//                                       <span className='btn btn-info'>GET DETAILS</span>
//                                     </div>

//                                 </Link>
//                             </div>
//                         ))
//                     }
//                 </div>

//             </div>
//         </div>
//     )

//      }
// export default Home