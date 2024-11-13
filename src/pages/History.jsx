import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { getHistory,deleteHistory } from '../services/allAPI'

export default function History() {

  const [addHistory,setAddHistory]= useState([])
  

  useEffect(() => {
    getVideoHistory()
  }, [])
  
  console.log(addHistory);
  

  const getVideoHistory=async()=>{
    try{
      const result=await getHistory()
      setAddHistory(result.data)
    }
    catch(err){
      console.log(err);
      
    }
  }

  const removeHistory=async(videoId)=>{

    try{

    await deleteHistory(videoId)
    getVideoHistory()
    }
    catch(err){
      console.log(err);
      
    }
  }

  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between">
        <h4 className='text-warning'>Watch History</h4>
        <Link to={'/home'} className='text-info fw-bold' style={{textDecoration:'none',fontSize:'20px'}}>Back to <i class="fa-solid fa-house"></i>
        
        </Link>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Date</th>
            <th><i class="fa-solid fa-ellipsis"></i></th>
          </tr>
        </thead>
        <tbody>
       { addHistory.length>0?
         
          
          addHistory?.map((data,index)=>(
            <tr key={data?.id}> 
            <th>{index+1}</th>
            <th>{data.caption}</th>
            <th><a href={data.youtubeUrl} target='blank'>{data.youtubeUrl}</a></th>
            <th>{data.formatedDate}</th>
            <th className='text-danger' onClick={()=>removeHistory(data?.id)}><i class="fa-solid fa-trash"></i></th>
            </tr>
            
          ))
          : 
          <h2 className='text-danger fw-bold text-center'>Nothing to display</h2>
          }
          
        </tbody>
      </table>
    </div>
  )
}
