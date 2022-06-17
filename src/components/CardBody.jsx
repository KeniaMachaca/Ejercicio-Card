import React from 'react'
import '../styles/CardBody.css'
import linkdein from '../assets/Vector.svg'
import instagram from '../assets/Vector2.svg'

function CardBody() {
  return (
    <>
    <div className='container-body'></div>
    <div className='container-body__name'>Yarriba Castro</div>
        <div className='container-body__prof'>Design Track</div>
        <div className='container-body__description'>I chose design track because I love to design beautiful user-centered interfaces.</div>
        <div className='container-body__in'>
            <img src={linkdein} alt="LinkedIn" />
            <span>Yaretas24</span>
        </div>
        <div className='container-body__insta'>
            <img src={instagram} alt="Instagram" />
            <span>Yaretas24</span>
        </div>
    </>
  )
}

export {CardBody}