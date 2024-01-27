import React from 'react'
import './Sectioncloud.scss'
import CloudCard from '../cloudcard/CloudCard'
import { FaExclamationCircle } from 'react-icons/fa'
const Sectioncloud = () => {
  return (
   <section id='cloud'>
   {/* section-1 */}
    <div className='cloud-1'>
        <div className='cloud-img'>
          <img className='cloud-image-1' src='./images/cloudhost.png' alt='cloud-img' />
       </div>
     <div className='cloud-content'>
      <h2 className='cloud-h2'>CLOUD-HOSTED VDI</h2>
      <p className='cloud-p'>Cloud-hosted VDI solutions deliver flexibility and agility, and simplify management so you can provide a better employee experience and focus on finding ways to innovate and help your organization maintain its competitive edge. </p>
     </div>
   </div>
    {/* section-2 */}
    <div className='cloud-2-parent'>
    <div className='cloud-2'>
     <div className='cloud-content-2'>
      <CloudCard heading="Get quick time to value"
       para='Scale capacity quickly with global 
reach in minutes rather than months.'
   />
   <CloudCard heading='Meet business demands'
    para='De-risk business continuity plans with flexible capacity and instant 
on-demand scalability.'
   />
   </div>
       <div className='cloud-2-img'>
       <div className='cloud-2-child'>
        <img src='./images/cloudlock.png' 
        alt='home-2-img' width="80%" height="170px"/>
         <p className='cloud-2-p'><span className='cloud-2-span'>79%</span>  Say cloud  <br/>
         VDI is more secure than 
         <br/>traditional models.</p>
        </div>   
      </div>
</div>
<CloudCard heading='Control costs and avoid capital expenditures' para='Pay as you go for the resources you use rather than committing to up-front expenses for data center development or expansion.'/>

 </div>
    

      {/* section-3 */}
      <div className='cloud-3'>
          <div className='cloud-3-child'>
          <img src='./images/40per.png' 
          alt='home-2-img' width="100%" height="200px"/>
             <p className='cloud-3-p'><span className='cloud-3-span'>40%</span> average savings <br/>
             compared to traditional
             <br/> on-premises data centers.</p>
         </div>
         <div  className='cloud-3-child'>
           <img src='./images/26per.png'  alt='home-2-img' width="100%" height="200px"/>
           <p className='cloud-3-p'><span 
          className='cloud-3-span'>26%</span>  reduction in <br/>
           total infrastructure costs <br/> on average.</p>
          </div>

    </div>
    {/* section-4 */}
    <div className='cloud-4-card'>
     <img src='./images/cloud-computing.png' alt='cloud'  className='cloud-4-icon'/>
    <p className='cloud-4-para'> 
       <span className='cloud-4-span1'> BY THE NUMBERS </span>Cloud VDI adoption<span className='cloud-4-span2'> grew by 82% in 6 weeks </span> in response to the rapid shift to remote work.
     </p>
   </div>

   </section>

  )
}

export default Sectioncloud