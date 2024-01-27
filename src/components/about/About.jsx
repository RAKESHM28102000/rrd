import React from 'react'
import './About.scss';
import { FaExclamationCircle } from "react-icons/fa";
const About = () => {
  return (<section id='about'>
     {/* about-1 */}
    <div className='about-h2'><h2>Can you continue to rely only on on-premises VDI delivery and management?</h2></div>
     {/* about-2 */}
    <div className='about-p'><p>Virtual desktops and apps can help boost employee experience across devices and apps, wherever employees are working. But traditional on-premises VDI solutions pre-date the widespread use of cloud, and IT teams are struggling to provide distributed workforces with the fast, reliable access to both legacy and modern apps they need to stay productive. On-premises deployments and management alone can stifle capacity and the ability to deliver resources to the people who need them, when they need them.</p></div>
      {/* about-3 */}
    <div className='about-3-div'>
      {/* about-sub-1 */}
      <div className='about-3-h3'>
      <h3>Common challenges include</h3>
      </div>  
       {/* about-sub-2 */}
        <div className='about-3-card-parent'>
           <div className='about-3-card'>
               <img src='./images/orgperformance.png' alt='about-img'width='100%' height='150px'/>
               <h4>POOR PERFORMANCE</h4>
               <p>Stretching capacity to support significantly more users results in inadequate compute, memory or storage resources—and sub-par performance.</p>
           </div>
         <div className='about-3-card'>
           <img src='./images/orginability.png' alt='about-img' width='100%' height='150px'/>
           <h4>INABILITY TO MEET UNEXPECTED DEMAND</h4>
           <p>Maxing out data center resources for existing operations can make it difficult to support growth.</p>
        </div>
        <div className='about-3-card'>
           <img src='./images/orgbusiness.png' alt='about-img' width='100%' height='150px'/>
          <h4>BUSINESS CONTINUITY CONCERNS</h4>
          <p>Repurposing secondary or backup data centers for daily operations leaves organizations unprepared for the future.</p>
        </div>
    </div>
     {/* about-sub-4 */}
     <div className='about-4-card'>
        <FaExclamationCircle  className='about-4-icon'/>
       <p className='about-4-para'> 
          <span className='about-4-span1'> THE 2020 CALL FOR REMOTE WORK </span>
         <span className='about-4-span2'> Only 12% of organizations </span>
          were highly prepared for the impact of the COVID-19 pandemic.
        </p>
      </div>
       {/* about-sub-5 */}
      <div className='about-5-parent'>
                 {/* <div className='about-5-img'> */}
                   {/* <img src='./images/cloud-3.jpg' alt='about-5-imge' width='100%' height='100%'/> */}
                {/* </div> */}
                  {/* <div className='about-5-img'> */}
              {/* <img src='./images/cloud-3.jpg' alt='about-5-imge' width='100%' height='100%'/> */}
              {/* </div> */}
               {/* <div className='about-5-img'> */}
             {/* <img src='./images/cloud-3.jpg' alt='about-5-imge' width='100%' height='100%'/> */}
           {/* </div> */}
           <div className='about-final-img'>
<img src='./images/aboutfinalimg.png' alt='aboutFinalimg' width='100%' height='200px'/>
</div>
          </div>
       {/* about-sub-6 */}
<div className='about-6-parent'>
<div className='about-6-h2'>
<h2>VDI desktops and apps that leverage the cloud</h2>
</div>
<div className='about-6-p'>
<p>
The ability to deploy and manage VDI desktops and apps in the hybrid cloud eases the pressure on existing 
IT infrastructure, eliminates distress, and positions you for success. Now is the time to go beyond traditional 
on-premises VDI solutions to modern, cloud-hosted or hybrid-managed approaches.
</p></div>

</div>
    </div>
        </section>
  )
}

export default About