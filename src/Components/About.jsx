import React from 'react'
import AboutBackground from '../assets/about-background.png'
import AboutBackgroundImage from '../assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primay-heading'>
                Food is an important part of a balanced diet
            </h1>
            <p className='primary-text'>
                Healthy switcher chefs do all the prep work, like peeding, chopping & marinting, so you can cook a fresh food.
            </p>
            <p className='primary-text'>
                Our mission is to make delicious, healthy food accessible to everyone.
            </p>
            <div className='about-button-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'>{""} <BsFillPlayCircleFill/>Watch video</button>
            </div>
        </div>
    </div>
  )
}

export default About