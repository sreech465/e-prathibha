import React, {  useEffect } from 'react'

import { useDispatch } from 'react-redux';
import { getYearlyQuestions } from '../Redux/Actions';
import {useSelector} from 'react-redux';





 function Home() {

    const state1 = useSelector(state=>state.GetYearlyReducer.user4.data.data.exams)
    console.log(state1);

    const dispatch = useDispatch();

          useEffect(() => {
            dispatch(getYearlyQuestions());
         
        }, []);
        
    
    return (
        <>
      
                    
                    
                            <div className='col-md-3'>
                                <div className='card'>
                                    <h2>LIMITED NCERT</h2>
                                    <p>ID :{state1[2]["Limited NCERT"][0].Package.id}</p>
                                    <p>NAME :{state1[2]["Limited NCERT"][0].Package.name}</p>
                                    <p>EXAM[ID] :{state1[2]["Limited NCERT"][0].Exam.id}</p>
                                    <p>EXAM[TYPE] :{state1[2]["Limited NCERT"][0].Exam.type}</p>
                                    <p>EXAM[NAME] :{state1[2]["Limited NCERT"][0].Exam.name}</p>
                                </div>
                                </div>
                  
                   

                    

                                
</>
    )}
export default Home




