import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideos } from '../services/allAPI';
import { saveHistory } from '../services/allAPI';


function VideoCArd({displayData,setDeleteData}) {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {
    
    const {caption,youtubeUrl}=displayData

    const localTime=new Date()
    const formatedDate=localTime.toLocaleString()
    const videoHistory={caption,youtubeUrl,formatedDate}

    try{
      await saveHistory(videoHistory)
    }
    catch(err){
        console.log(err);
        
    }
    
    setShow(true)
  
  };
  console.log(displayData);

  const handleRemoveVideo=async(videoId)=>{
      const result=await deleteVideos(videoId)
      setDeleteData(result.data)
      console.log(result);
      
  }
  
  return (
    <div>


<Card style={{ width: '15rem' }}>
      <Card.Img height={280} variant="top" onClick={handleShow} src={displayData.imageUrl} />
      <Card.Body className='d-flex align-items-center justify-content-between'>
       <p className='fw-bold text-white'style={{fontSize:'20px'}}>{displayData.caption}</p>
       <button onClick={()=>handleRemoveVideo(displayData?.id)} className='btn '><i class="fa-solid fa-trash" style={{color:'red', fontSize:'20px'}}></i></button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Avatar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className=' mb-4' width="100%" height="370" src={`${displayData.youtubeUrl}?autoplay=1`} title="Avatar: The Way of Water | Official IMAX® Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
       
      </Modal>


    </div>
  )
}

export default VideoCArd
