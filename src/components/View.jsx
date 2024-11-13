import React, { useEffect, useState } from 'react'
import { Row ,Col } from 'react-bootstrap'
import VideoCArd from './VideoCArd'
import { getAllVideos } from '../services/allAPI'



function View({addVideoResponse}) {

  const [allVideos,setAllVideos]=useState([])
  const [deleteData,setDeleteData]=useState([])
  useEffect(() => {
    
    getVideos()

  },[addVideoResponse,deleteData] )

  console.log(allVideos);
  

  const getVideos=async()=>{
    try{
      const result=await getAllVideos()
      setAllVideos(result.data)
    }
    catch(err){
      console.log(err);
      
    }
  }
  

  return (
    <div >
     {
      allVideos.length>0 ?
      <Row className='border border-3 p-3 rounded '>
       {

        allVideos?.map(video=>(
          <Col key={video?.id} lg={6} md={6} sm={12} className='mt-4' >
        
                   <VideoCArd displayData={video} setDeleteData={setDeleteData}/>
               </Col>
        ))

       }
    </Row>
    :
    <div className='text-danger fs-3 fw-bold'>Nothing to Display</div>
     } 
      



    </div>
  )
}

export default View
