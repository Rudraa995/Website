import React from 'react'
import PickMeals from '../assets/pick-meals-image.png'
import ChooseMeals from '../assets/choose-image.png'
import DeliveryMeals from '../assets/delivery-image.png'

const work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Delivery",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        }
      ]
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Work</p>
        <h1 className='primary-heading'>How It Works</h1>
        <p className='primary-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
       </div>
       <div className='work-section-bottom'>
        {
            workInfoData.map((data) => (
              <div className='work-section-info'>
                <div className='info-boxes-img-container'>
                  <img src={data.image} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
        ))}
       </div>
    </div>
  )
}

export default work