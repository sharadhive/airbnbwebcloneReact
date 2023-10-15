import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className='homeSection'>
        <Card
          src="https://images.pexels.com/photos/17948132/pexels-photo-17948132/free-photo-of-interior-of-an-elegant-hotel-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Vande Bharath "
          description="Download and use 10,000+ Free stock photos for free. Thousands of new images every day Completely Free to Use High-quality videos and images from Pexels"
          price="₹-3999"
        />
        <Card
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Vrindhavan life "
          description="Download and use 10,000+ Free stock photos for free. Thousands of new images every day Completely Free to Use High-quality videos and images from Pexels."
          price="₹-2300"
        />
        <Card
          src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="bharath kutumbh"
          description="Download and use 10,000+ Free stock photos for free. Thousands of new images every day Completely Free to Use High-quality videos and images from Pexels."
          price="₹-4300"
        />
      </div>
      <div className='homeSection'>
        <Card
          src="https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Fourth Card"
          description="Description for the fourth card."
        />
        <Card
          src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Fifth Card"
          description="Description for the fifth card."
        />
        <Card
          src="https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Sixth Card"
          description="Description for the sixth card."
        />
      </div>
    </div>
  );
}

export default Home;
