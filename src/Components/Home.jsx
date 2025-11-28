import React from 'react'
import Navbar from './Navbar.jsx'
import BannerBackground from '../assets/home-banner-background.png'
import BannerImage from '../assets/home-banner-image.png'
import {FiArrowRight} from 'react-icons/fi'

const Home = () => {
  return (
    <div className="home-container">
        <Navbar />
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt="" />
            </div>
            <div className='home-text-section'>
                
                <h1 className='primary-heading'>
                    Your favourite food delivered hot & fresh 
                </h1>
                <p>
                    Healthy switcher chefs do all the prep work, like peeding, chopping<br></br>
                    & marinting, so you can cook a fresh food.
                </p>
                <button className='secondary-button'>
                    order now <FiArrowRight />
                </button>
                
            </div>
            <div className='home-image-container'>
                    <img src={BannerImage} alt="banner" />
            </div>
        </div>
    </div>
  )
}

export default Home