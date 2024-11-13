import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    <div className='row'>
      <div className="col-lg-5 ">
        <h3 className='ms-4'><i class="fa-solid fa-circle-play color me-2"></i>Media Player</h3>
        <p className='ms-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum id officiis ea, nisi quia possimus odit aliquam excepturi, harum, eaque dolorum reprehenderit aperiam obcaecati accusamus dignissimos asperiores? Quis, repudiandae! Eum.</p>
        <p className='ms-4'>code is liscensed by luminar</p>
        <p className='ms-4'>currently v5.3.2</p>
      </div>
      <div className="col-lg-2">
      <h5 className='ms-4'>Links</h5>
        <ul className='links '>
            <div> <Link to={'/'} >Landing</Link></div>
            <div> <Link to={'/home'} >Home</Link></div>
            <div> <Link to={'/history'} >watch history</Link></div>
        </ul>
      </div>
      <div className="col-lg-2">
      <h5 className='ms-4'>Guide</h5>
        <ul  className='links'>
        <div> <Link to={'/'} >React</Link></div>
        <div> <Link to={'/home'} >React bootstrap</Link></div>
        <div><a href="">watch router</a></div>
        </ul>
      </div>
      <div className="col-lg-3">
      <h5 className='ms-4'>Contact Us</h5>
      <div className='d-flex justify-content-between ms-4 '>
      <input type="text" className='input  'style={{width:'350px',padding:'10px'}} placeholder='enter email' />
      <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
      </div>
        <br />
        <div className='d-flex justify-content-between mt-3 ms-4'>
            <a href="" style={{textDecoration:'none',fontSize:'20px',color:'white'}}><i class="fa-brands fa-facebook  "></i></a>
            <a href="" style={{textDecoration:'none',fontSize:'20px',color:'white'}}><i class="fa-brands fa-twitter"></i></a> 
            <a href="" style={{textDecoration:'none',fontSize:'20px',color:'white'}}><i class="fa-brands fa-instagram "></i></a>
            <a href="" style={{textDecoration:'none',fontSize:'20px',color:'white'}}><i class="fa-brands fa-linkedin" style={{color:" #fcfcfc;"}}></i></a>
            <a href="" style={{textDecoration:'none',fontSize:'20px',color:'white'}}><i class="fa-brands fa-github "></i></a>
            <a href="" style={{textDecoration:'none',fontSize:'20px',color:'white'}}> <i class="fa-solid fa-phone " style={{color: "#ffffff;"}}></i></a>
        </div>
        

      </div>
    </div>
    <p className='text-center mt-4'>Copyright july 2024 Batch,Media Player ,Build with react</p>
    </>
    
  )
}

export default Footer
