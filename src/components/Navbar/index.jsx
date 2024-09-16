import React from 'react'
import './style.css'

export default function Navbar() {
  return (
    <>
        <nav>
            <div className='section-name'>
                <h2>CAMPOS</h2>
                <p>Pessoal</p>
            </div>
            <div className='section-contacts'>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Serviços</li>
                    <li>Blog</li>
                    <li>Contatos</li>
                </ul>
            </div>
        </nav>
   </>
  )
}
