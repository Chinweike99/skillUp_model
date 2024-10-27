import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroContainer'>
        <div className='overlay'></div>

        <div className='heroWrite'>
          <h1>We are still building
          </h1>
          <h3>Learn &gt;&gt; Grow &gt;&gt; Thrive 🥇</h3>
        </div>

        <div className='heroMessage'>
           <p>Welcome to skillup model..</p>

          <p >
          Building something 'Skill-tastic'!😎😎 <br />
          but can't wait to show you what's coming 🚀.
          </p>
        </div>

        <button>Get started</button>
      </div>
    </div>
  )
}
