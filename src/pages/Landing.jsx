import React from 'react'
import {  Link} from "react-router-dom";
import landingImage from '../assets/Video_Player3.png'
import feature1 from '../assets/feature1.png'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Landing() {
  return (
    <div>
        <div className='container landingsection'>
            <div className='row align-items-center my-5'>
                <div className='col-lg-5'>
                        <h3 className='mt-3'>Welcome to <span className='text-warning'>Media Player</span></h3>
                        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ex omnis accusamus assumenda earum esse illum ratione, magni id vel recusandae libero inventore nobis, perspiciatis molestias voluptate quisquam tempore nisi.</p>
                        <Link to={'/home'} className='btn btn-info'> Get Started</Link>
                </div>
                <div className="col-lg-6">
                    <img src={landingImage} width='500px' className='ms-5' alt="" />
                </div>
            </div>
        </div>
        {/* features */}

        <div className="container my-5">
            <h3>Features</h3>
            <div className="row mt-5">
                <div className="col-lg-4">
                     <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={feature1} />
                    <Card.Body>
                        <Card.Title>Managing videos</Card.Title>
                        <Card.Text>
                        User can Upload, view and remove the videos
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-4">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={feature1} />
                    <Card.Body>
                        <Card.Title>Managing videos</Card.Title>
                        <Card.Text>
                        User can Upload, view and remove the videos
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>

                <div className="col-lg-4">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={feature1} />
                    <Card.Body>
                        <Card.Title>Managing videos</Card.Title>
                        <Card.Text>
                        User can Upload, view and remove the videos
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
            </div>

           

        </div>

        {/* landing footer */}

        <div className="container my-5 p-5 border border-white rounded">
            <div className="row">
                <div className="col-lg-6">
                    <h3 className='text-warning'>Simple,Fast and Powerful</h3>
                    <div className='mt-5 text-white'>
                        <p><span className='fs-4 fw-bold'>Play Everything : </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio dolorum aliquam nam voluptates, ad minima harum veritatis reiciendis fuga similique illum amet magnam ex quisquam dolores esse dolorem impedit quod.</p>

                    </div>

                    <div className='mt-5 text-white'>
                        <p><span className='fs-4 fw-bold'>Manage Videos : </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio dolorum aliquam nam voluptates, ad minima harum veritatis reiciendis fuga similique illum amet magnam ex quisquam dolores esse dolorem impedit quod.</p>

                    </div>

                    <div className='mt-5 text-white'>
                        <p><span className='fs-4 fw-bold'>Watch History : </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio dolorum aliquam nam voluptates, ad minima harum veritatis reiciendis fuga similique illum amet magnam ex quisquam dolores esse dolorem impedit quod.</p>

                    </div>
                </div>
                <div className="col-lg-6">
                    <iframe className='ms-5 mt-5' width={560} height={415} src="https://www.youtube.com/embed/d9MyW72ELq0?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerPolicy='strict-origin-when-cross-origin' allowFullScreen></iframe>
                </div>
            </div>
        </div>
        
    </div>
   
  )
}
