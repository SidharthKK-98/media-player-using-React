import React from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'
import { useState } from 'react'

export default function Home() {

const [addVideoResponse,setAddVideoResponse]=useState("")

  return (
    <div>
      <div className="container m-5 d-flex justify-content-between">
            <Add setAddVideoResponse={setAddVideoResponse}/>
        <Link to={'/history'} className='text-warning fw-bold'style={{textDecoration:"none"}}>Watch History</Link>
      </div>

      <div className="row m-5">
        <div className="col-lg-6">
            <h3 className='text-info'>All Videos</h3>
            <View addVideoResponse={addVideoResponse}/>
        </div>
        <div className="col-lg-6">
            <Category/>
        </div>
      </div>
    </div>
  )
}
