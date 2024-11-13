import React from 'react'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory,getAllCategory,deleteCategory } from '../services/allAPI';

function Category() {

  const [show, setShow] = useState(false);

  const [categoryName,setcategoryName]=useState("")
  console.log(categoryName);

  const [allCategory,setAllCategory]=useState([])
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory=async()=>{
    if(categoryName){
        await addCategory({categoryName,allVideos:[]})
        handleClose()
        displayCategory()
    }
    else{
      toast.warning("enter the category name")
    }
  }

  const displayCategory=async()=>{
    try{
      const result=await getAllCategory()
      setAllCategory(result?.data)
      
    }
    catch(err){
      console.log(err);
      
    }
      
  }

  const removeCategory=async(categoryId)=>{
    try{
      await deleteCategory(categoryId)
      displayCategory()
    }
    catch(err){
      console.log(err);
      
    }
  }

  useEffect(() => {
    displayCategory()
  }, [])
  

  return (
    <div >
    <div className='d-flex justify-content-around'>
        <h3 className='text-info'>All Category</h3>
          <Button className='btn btn-warning rounded-circle fs-5 m-3 fw-bolder' onClick={handleShow}  >
            +
          </Button>
    </div>
      

      {/* Category box */}
    {
      allCategory.length>0?
      allCategory?.map(data=>(

        <div className="container-fluid mt-3" key={data?.id}>
        <div className="border border-light border-3 rounded p-3  mb-3">
          <div className="d-flex justify-content-between">
              <h5>{data.categoryName}</h5>
              <button  className='btn ' onClick={()=>removeCategory(data?.id)}><i class="fa-solid fa-trash" style={{color:'red', fontSize:'20px'}}></i></button>
          </div>
          

        </div>
    </div>

      ))
        
    :
    <h5>No category is added</h5>
    }
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="border border-3 border-info rounded pt-3 ps-3 pe-3">
        <FloatingLabel controlId="floatingInputcaption" label="Video Category"className="mb-3">
           <Form.Control  onChange={(e)=>setcategoryName(e.target.value)} type="text" placeholder="enter video caption" />
         </FloatingLabel>

        
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory} >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      
      <ToastContainer
position="top-center"
autoClose={3000}

theme="colored"
/>
   
    </div>
  )
}

export default Category
