import React from 'react'
import Footer from './Footer'
import Button from '../components/Bouton'
import Card from '../components/Card'
import Layout from './Layout'
import Hero from '../components/Hero'
import PostSlider from '../components/PostSlider'

function HomeLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-9 py-5">
          <div className="row">
            <div className='col-3'>
              <div className="card" style={{width: "18rem"}}>
                <img src={'../../assets/images/placeholder.webp'} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" className="btn btn-link">Lire plus</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <nav id="sidebar" className="col-3">
          <div className="p-4 pt-5">

            {/* Direction Générale */}
            <h5>Direction Générale</h5>
            <ul className="list-unstyled components mb-5">
              <li>
                <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false">Secrétariat</a>
              </li>
              <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">Conseillers</a>
              </li>
              <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">Agences</a>
              </li>
              <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">Cellule communication et Relations publiques</a>
              </li>
              <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">Cellule informatique</a>
              </li>
              <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">Médecin conseiller</a>
              </li>
              <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">Actuaire</a>
              </li>
              <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">Audit interne</a>
              </li>
              <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">Bibliothèque et Archive</a>
              </li>
            </ul>

            {/* Direction administrative et financière */}
            <h5>Direction administrative et financière</h5>
            <ul className="list-unstyled components mb-5">
              <li>
                <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false">Secrétariat</a>
              </li>
              <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">Service du Personnel et Logistique</a>
              </li>
              <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">Service de Recouvrement</a>
              </li>
              <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">Service Comptabilité</a>
              </li>
              <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">Service Budget</a>
              </li>
            </ul>  

            {/* Direction des prestations */}
            <h5>Direction des prestations</h5>
            <ul className="list-unstyled components mb-5">
              <li>
                <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false">Secrétariat</a>
              </li>
              <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">Service des Pensions</a>
              </li>
              <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">Service des Risques</a>
              </li>
              <li>
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false">Professionnels</a>
              </li>
            </ul>  

            <div className="mb-5">
              <h5>Newsletter</h5>
              <form action="#" className="subscribe-form">
                <div className="form-group d-flex">
                  <div className="icon"><span className="icon-paper-plane"></span></div>
                  <input type="text" className="form-control" placeholder="Enter Email Address" />
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
      
    </div>
  )
}

export default HomeLayout