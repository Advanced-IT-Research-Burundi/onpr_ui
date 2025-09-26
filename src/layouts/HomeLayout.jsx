import React from 'react'
import Footer from './Footer'
import Button from '../components/Bouton'
import Card from '../components/Card'

const Hello = () =>{
    alert("Click ok")
}

function HomeLayout() {
  return (
    <>
        <Button type='upload' onClick={Hello}>Contactez-Nous</Button>
    <Card title='Hello ni sawa'>
        <p>This the description if the Card</p>
    </Card>
    </>

    
  )
}

export default HomeLayout