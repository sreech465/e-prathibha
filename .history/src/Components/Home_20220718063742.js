import React, {  useEffect } from 'react'

import { useDispatch } from 'react-redux';
import { getYearlyQuestions } from '../Redux/Actions';
// import {useSelector} from 'react-redux';





 function Home() {

   

    const dispatch = useDispatch();

          useEffect(() => {
            dispatch(getYearlyQuestions());
         
        }, []);

        // const state1 = useSelector(state=>state.GetYearlyReducer.user4.data.data.exams)
        // console.log(state1);
        
    
    return (
        <>
      
                   {/* <div style={{display : 'flex'}}>
                    
                            <div className='col-md-3'>
                                <div className='card'>
                                    <h2>LIMITED NCERT</h2>
                                    <p>ID :{state1[2]["Limited NCERT"][0].Package.id}</p>
                                    <p>NAME :{state1[2]["Limited NCERT"][0].Package.name}</p>
                                    <p>EXAM[ID] :{state1[2]["Limited NCERT"][0].Exam.id}</p>
                                    <p>EXAM[TYPE] :{state1[2]["Limited NCERT"][0].Exam.type}</p>
                                    <p>EXAM[NAME] :{state1[2]["Limited NCERT"][0].Exam.name}</p>
                                    <button>WRITE EXAM</button>
                                </div>
                                </div>
                                <div className='col-md-3'>
                                <div className='card'>
                                    <h2>LIMITED NCERT</h2>
                                    <p>ID :{state1[2]["Limited NCERT"][1].Package.id}</p>
                                    <p>NAME :{state1[2]["Limited NCERT"][1].Package.name}</p>
                                    <p>EXAM[ID] :{state1[2]["Limited NCERT"][1].Exam.id}</p>
                                    <p>EXAM[TYPE] :{state1[2]["Limited NCERT"][1].Exam.type}</p>
                                    <p>EXAM[NAME] :{state1[2]["Limited NCERT"][1].Exam.name}</p>
                                </div>
                                </div>
                                <div className='col-md-3'>
                                <div className='card'>
                                    <h2>LIMITED NCERT</h2>
                                    <p>ID :{state1[2]["Limited NCERT"][2].Package.id}</p>
                                    <p>NAME :{state1[2]["Limited NCERT"][2].Package.name}</p>
                                    <p>EXAM[ID] :{state1[2]["Limited NCERT"][2].Exam.id}</p>
                                    <p>EXAM[TYPE] :{state1[2]["Limited NCERT"][2].Exam.type}</p>
                                    <p>EXAM[NAME] :{state1[2]["Limited NCERT"][2].Exam.name}</p>
                                </div>
                                </div>
                                <div className='col-md-3'>
                                <div className='card'>
                                    <h2>LIMITED NCERT</h2>
                                    <p>ID :{state1[2]["Limited NCERT"][3].Package.id}</p>
                                    <p>NAME :{state1[2]["Limited NCERT"][3].Package.name}</p>
                                    <p>EXAM[ID] :{state1[2]["Limited NCERT"][3].Exam.id}</p>
                                    <p>EXAM[TYPE] :{state1[2]["Limited NCERT"][3].Exam.type}</p>
                                    <p>EXAM[NAME] :{state1[2]["Limited NCERT"][3].Exam.name}</p>
                                </div>
                                </div>

                                </div>

                                <div style={{display : 'flex'}}>

                                <div className='col-md-3'>
                                <div className='card'>
                                    <h2>Limited UPSC other than Civils</h2>
                                    <p>ID :{state1[1]["Limited UPSC other than Civils"][0].Package.id}</p>
                                    <p>NAME :{state1[1]["Limited UPSC other than Civils"][0].Package.name}</p>
                                    <p>EXAM[ID] :{state1[1]["Limited UPSC other than Civils"][0].Exam.id}</p>
                                    <p>EXAM[TYPE] :{state1[1]["Limited UPSC other than Civils"][0].Exam.type}</p>
                                    <p>EXAM[NAME] :{state1[1]["Limited UPSC other than Civils"][0].Exam.name}</p>
                                </div>
                                </div>
                                

                                <div className='col-md-3'>
                                <div className='card'>
                                    <h2>Limited UPSC other than Civils</h2>
                                    <p>ID :{state1[1]["Limited UPSC other than Civils"][1].Package.id}</p>
                                    <p>NAME :{state1[1]["Limited UPSC other than Civils"][1].Package.name}</p>
                                    <p>EXAM[ID] :{state1[1]["Limited UPSC other than Civils"][1].Exam.id}</p>
                                    <p>EXAM[TYPE] :{state1[1]["Limited UPSC other than Civils"][1].Exam.type}</p>
                                    <p>EXAM[NAME] :{state1[1]["Limited UPSC other than Civils"][1].Exam.name}</p>
                                </div>
                                </div>

                                <div className='col-md-3'>
                                <div className='card'>
                                    <h2>Limited UPSC other than Civils</h2>
                                    <p>ID :{state1[1]["Limited UPSC other than Civils"][2].Package.id}</p>
                                    <p>NAME :{state1[1]["Limited UPSC other than Civils"][2].Package.name}</p>
                                    <p>EXAM[ID] :{state1[1]["Limited UPSC other than Civils"][2].Exam.id}</p>
                                    <p>EXAM[TYPE] :{state1[1]["Limited UPSC other than Civils"][2].Exam.type}</p>
                                    <p>EXAM[NAME] :{state1[1]["Limited UPSC other than Civils"][2].Exam.name}</p>
                                </div>
                                </div>

                                <div className='col-md-3'>
                                <div className='card'>
                                    <h2>Limited UPSC other than Civils</h2>
                                    <p>ID :{state1[1]["Limited UPSC other than Civils"][3].Package.id}</p>
                                    <p>NAME :{state1[1]["Limited UPSC other than Civils"][3].Package.name}</p>
                                    <p>EXAM[ID] :{state1[1]["Limited UPSC other than Civils"][3].Exam.id}</p>
                                    <p>EXAM[TYPE] :{state1[1]["Limited UPSC other than Civils"][3].Exam.type}</p>
                                    <p>EXAM[NAME] :{state1[1]["Limited UPSC other than Civils"][3].Exam.name}</p>
                                </div>
                                </div>

                                </div>

                                <div style={{display : 'flex'}}>

                                <div className='col-md-3'>
                                <div className='card'>
                                    <h2>Old question papers UPSC Civils (Pre)</h2>
                                    <p>ID :{state1[0]["Old question papers UPSC Civils (Pre)"][0].Package.id}</p>
                                    <p>NAME :{state1[0]["Old question papers UPSC Civils (Pre)"][0].Package.name}</p>
                                    <p>EXAM[ID] :{state1[0]["Old question papers UPSC Civils (Pre)"][0].Exam.id}</p>
                                    <p>EXAM[TYPE] :{state1[0]["Old question papers UPSC Civils (Pre)"][0].Exam.type}</p>
                                    <p>EXAM[NAME] :{state1[0]["Old question papers UPSC Civils (Pre)"][0].Exam.name}</p>
                                </div>
                                </div>

                                <div className='col-md-3'>
                                <div className='card'>
                                    <h2>Old question papers UPSC Civils (Pre)</h2>
                                    <p>ID :{state1[0]["Old question papers UPSC Civils (Pre)"][1].Package.id}</p>
                                    <p>NAME :{state1[0]["Old question papers UPSC Civils (Pre)"][1].Package.name}</p>
                                    <p>EXAM[ID] :{state1[0]["Old question papers UPSC Civils (Pre)"][1].Exam.id}</p>
                                    <p>EXAM[TYPE] :{state1[0]["Old question papers UPSC Civils (Pre)"][1].Exam.type}</p>
                                    <p>EXAM[NAME] :{state1[0]["Old question papers UPSC Civils (Pre)"][1].Exam.name}</p>
                                </div>
                                </div>

                                <div className='col-md-3'>
                                <div className='card'>
                                    <h2>Old question papers UPSC Civils (Pre)</h2>
                                    <p>ID :{state1[0]["Old question papers UPSC Civils (Pre)"][2].Package.id}</p>
                                    <p>NAME :{state1[0]["Old question papers UPSC Civils (Pre)"][2].Package.name}</p>
                                    <p>EXAM[ID] :{state1[0]["Old question papers UPSC Civils (Pre)"][2].Exam.id}</p>
                                    <p>EXAM[TYPE] :{state1[0]["Old question papers UPSC Civils (Pre)"][2].Exam.type}</p>
                                    <p>EXAM[NAME] :{state1[0]["Old question papers UPSC Civils (Pre)"][2].Exam.name}</p>
                                </div>
                                </div>

                               

                                </div> */}
                  
                   
          
                    

                                
</>
    )}
export default Home






