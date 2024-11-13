import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../services/allAPI';


function Add({setAddVideoResponse}) {
  const [videoDetails,setVideoDetails]=useState({caption:"",imageUrl:"",youtubeUrl:""})
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [invalid,setInvalid]=useState(false)
  console.log(videoDetails);

  const getEmbedUrl=(link)=>{
    if(link.includes("v=")){
      let videoId=link.split("v=")[1].slice(0,11)
      setVideoDetails({...videoDetails,youtubeUrl:`https://www.youtube.com/embed/${videoId}`})
      setInvalid(false)
    }
    else if(link==""){
      setInvalid(false)

    }
    else{
      setVideoDetails({...videoDetails,youtubeUrl:""})
      setInvalid(true)
      console.log(invalid);
      
    }
  }

  const handleUpload=async()=>{
    const{caption,imageUrl,youtubeUrl}=videoDetails

    if(caption && imageUrl &&  youtubeUrl){
      
      try{
       const result=await addVideo(videoDetails)
       setAddVideoResponse(result.data)
       console.log(result);
       if(result.status>=200 && result.status<300){
        toast.success(`${result.data.caption} is added successfully`)
        handleClose()
       }
       
      }
      catch(err){
        console.log(err);
        
      }
    }
    else{
      toast.warning("enter the field completely")
    }
  }
  

  return (
    <div>
      
      <div className="d-flex align-items-center">
        <h3 className='text-warning'>Upload New Video</h3>
        <Button className='btn btn-warning rounded-circle fs-5 m-3 fw-bolder'  onClick={handleShow}>
        +
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>please fill following details</p>

         <div className="border border-3 border-info rounded pt-3 ps-3 pe-3">
          {/* caption */}
         <FloatingLabel controlId="floatingInputcaption" label="Video Caption"className="mb-3">
           <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="enter video caption" />
         </FloatingLabel>

          {/* image url */}

         <FloatingLabel controlId="floatingInputimage" label="image Url"className="mb-3">
           <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder="enter image Url" />
         </FloatingLabel>

          {/* youtube url */}

         <FloatingLabel controlId="floatingInputurl" label="youtube Url"className="mb-3">
           <Form.Control onChange={e=>getEmbedUrl(e.target.value)} type="text" placeholder="enter youtube Url" />
         </FloatingLabel>

         {invalid &&
          <h3 className='text-danger'>invalid Url</h3>
          
          }
         </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>

          
        </Modal.Footer>
      </Modal>
      </div>

      <ToastContainer
position="top-center"
autoClose={3000}

theme="colored"
/>
    </div>
  )
}

export default Add
