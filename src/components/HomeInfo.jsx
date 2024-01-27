import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box flex flex-col gap-2 justify-center items-center'>
    <p className=' font-medium sm:text-xl text-center'>{text}</p>
    <Link
      to={link}
      className='flex gap-3 justify-center items-center glassy-button'
    >
      {btnText}
      <img src={arrow} alt='arrow' className=' w-4 h-4 object-contain' />
    </Link>
  </div>
)

const rederedContent = {
  1: (
    <h1 className=' sm:text-xl sm:leading-snug glassy-box rounded-xl text-center py-12 px-8 mx-5 text-white'>
      Hi, I am <span className=' font-bold'>Isbat </span>
      <span className=' wave-hand'>👋</span>
      <br />A Full Stack Web Developer
      <br />
      <br />
      Drag the mouse to move
    </h1>
  ),
  2: (
    <InfoBox
      text='My journey as a programmer started from a love for problem solving and puzzles.'
      link='/about'
      btnText='Learn More'
    />
  ),
  3: (
    <InfoBox
      text='Worked on a varied types of projects. From simple frontend apps to Full stack social media app.'
      link='/projects'
      btnText='Visit Portfolio'
    />
  ),
  4: (
    <InfoBox
      text="Got an idea for a project? Let's make that into reality together."
      link='/contact'
      btnText="Let's Talk"
    />
  ),
}

const HomeInfo = ({ currentStage }) => {
  return <div>{rederedContent[currentStage] || null}</div>
}

export default HomeInfo
