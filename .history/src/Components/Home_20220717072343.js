import React, {  useEffect } from 'react'

import { useDispatch } from 'react-redux';
import { getYearlyQuestions } from '../Redux/Actions';
import {useSelector} from 'react-redux';





 function Home() {

    const state1 = useSelector(state=>state.GetYearlyReducer.user4.data.data)
    console.log(state1);

    const dispatch = useDispatch();

          useEffect(() => {
            dispatch(getYearlyQuestions());
         
        }, [])
    
    return (
        <>
        <div>
            <div className='container  py-5'>
                <div className='row'>
                    {
                     state.GetYearlyReducer.user4.data.exams.map((rohit) => (
                            <div className='col-md-3'>
                                <div className='card'>
                                    <p>{rohit.user4.data.data.exams}</p>
                                </div>
                                {/* <Link to={`/Home/${users2.id}`}>

                                    <div className="card">
                                        <img className="card-img-top" src={user.picture} alt="Card image cap" />
                                      <span className='btn btn-info'>GET DETAILS</span>
                                    </div>

                                </Link> */}
                            </div>
                     ))
                    }
                </div>

            </div>
        </div>
        </>
    )

     }
export default Home




