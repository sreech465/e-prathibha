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
        <div>
            <div className='container  py-5'>
                <div className='row'>
                   {state1[2]["Limited NCERT"][0].Package.id}
                    </div>
                    </div>
                    </div>

                    

                                
</>
    )}
export default Home




