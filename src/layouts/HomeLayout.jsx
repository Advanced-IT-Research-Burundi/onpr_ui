import React from 'react'
import Footer from './Footer'
import Button from '../components/Bouton'
import Card from '../components/Card'
import Layout from './Layout'
import Hero from '../components/Hero'
import PostSlider from '../components/PostSlider'
import Sidebar from './SiderBar'

function HomeLayout() {
  return (
    <>
      <Hero />
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-9">
            <h4 className="heading-section  mb-4">Actualités récentes</h4>
            <div className="row">
              <div className='col-3'>
                <div className="card" style={{width: "18rem"}}>
                  <img src={'../../img/placeholder.webp'} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-link">Lire plus</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default HomeLayout