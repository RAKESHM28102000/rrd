import React from 'react'
import './home.scss';
const Home = () => {
  return (
    <section id='home'>
    {/* section 1*/}
    <div className='home'>
     <div className='home-content'>
        <p className='home-p'>Optimize VDI for the</p>
        <p className='home-p'>Future with Hybrid</p>
        <p className='home-p'>Cloud Management</p>
        <p className='home-p'>and Deployment</p>
     </div>
     <div className='home-img'>
     <img className='home-image-1' src='./images/1.png' alt='home' />
     </div>
    </div>
    {/* section 2*/}
    <div className='home-1'>
        <p className='home-1-p'>
        The COVID-19 pandemic accelerated the shift to a distributed workforce 
        model that’s fast becoming the norm. This new workforce model will be here 
        to stay: In fact, nearly 75 percent of CFOs plan to shift some employees to 
        remote work permanently.
        </p>
    </div>
    {/* section 3*/}
    <div className='home-2'>
    <div className='home-2-child'>
          <h2 className='home-2-h2'>EMPLOYERS</h2>
          <p className='home-2-p'><span className='home-2-span'>60%</span> agree remote work is now a prerequisite for attracting and retaining talent.</p>
          {/* <img src='./images/perfomance-1.jpg' alt='home-2-img' width="100%" height="200px"/> */}
    </div>
    <div className='home-2-child'>
       <h2 className='home-2-h2'>EMPLOYEES</h2>
       <p className='home-2-p' ><span className='home-2-span'>30%</span> of the workforce 
      will work remote multiple days 
    a week by the end of 2021</p>
    {/* <img src='./images/perfomance.jpg' alt='home-2-img' width="100%" height="200px"/> */}
     </div>
    </div>
    <div className='home-final-img'>
    <img src='./images/homefinalimg.png' alt='homeFinalimg' width='100%' height='200px'/>
    </div>
    </section>
  )
}

export default Home