import CloudCard from '../cloudcard/CloudCard';
import './Hybrid.scss';
import React from 'react'

const Hybrid = () => {
  return (
   <section id='hybrid'>
 {/* section-1 */}
 <div className='hybrid-1'>
      <div className='hybrid-img'>
        <img className='hybrid-image-1' src='./images/hybrid3.png' alt='cloud-img' />
     </div>
     <div className='hybrid-content'>
       <h2 className='hybrid-h2'>HYBRID VDI DEPLOYMENT AND MANAGEMENT</h2>
        <p className='hybrid-p'>If you can’t or don’t want to run all your apps and data in the cloud right away, then a hybrid cloud VDI solution is right for you. Start your hybrid cloud journey now, while optimizing the capabilities of your existing infrastructure.</p>
      </div>
 </div>
 {/* section-2*/}
 <div className='hybrid-2'>
  <div className='hybrid-2-child-1'>
  <CloudCard heading='Ensure on-premises 
apps meet remote 
user needs'
  para='Place desktops and apps close to 
the data they access—whether 
on-premises or in the cloud.'
/> 
  <CloudCard heading='Leverage existing data center resources' para='Maximize investments in existing 
data center–based resources and 
leverage the cloud for additional 
capacity and use cases as needed.'/>
  <CloudCard heading='Make cloud migration 
more manageable' para='Prioritize migrating apps and data to 
the cloud based on your unique 
needs and timeframe.'/>
  </div>
  <div className='hybrid-2-child-1'>
 <CloudCard heading='Simplify
management' para='Leverage cloud native services to 
reduce costs and shift IT focus from 
performing manual administrative tasks 
to driving innovation—even with 
on-premises deployments.'/>
 <img src='./images/hybrid2.png' alt='hybrid-img' width='300px' height='40%'/>
  </div>
 </div>
 {/* section-3*/}
 <div className='hybrid-3-card'>
    <img src='./images/hy.png' alt='cloud'  className='hybrid-3-icon'/>
   <p className='hybrid-3-para'> 
      <span className='hybrid-3-span1'>SCALE WITHOUT FAIL </span>Learn how you can leverage VMware cloud 
management services to efficiently deploy and manage virtual desktops 
and apps across on-premises and cloud environments.
    </p>
  </div>
   </section>
  )
}

export default Hybrid