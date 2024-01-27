import './cloudjourney.scss';
import React from 'react'

const Cloudjourney = () => {
  return (
   <section id='cloudjour'>
    {/* section-1 */}
 <div className='cloudjour-1'>
 <div className='cloudjour-content'>
    <h2 className='cloudjour-h2'>Chart your own cloud journey</h2>
     <p className='cloudjour-p'>The work-from-anywhere model is now mainstream, and so is the 
adoption of cloud delivery models. That’s why more organizations are 
migrating from pure on-premises virtual desktop and app environments 
to pure cloud- or hybrid-managed models.</p>
<p className='cloudjour-p'>Taking a phased approach to adopting cloud by using technology that 
enables hybrid capabilities lets you</p>
<ul className='cloudjour-ul'>
    <li>Transition only specified desktop and app workloads so you can 
optimize performance and user experience by keeping desktops and 
applications close to the data that employees need to do their jobs.</li>
<li>Lower the cost of on-premises environments by leveraging modern 
cloud services</li>
</ul>
 </div>
      <div className='cloudjour-content-2'>
      <p className='cloudjour-p'>University of Technology Sydney<span className='cloudjour-span1'>reduced operating costs by</span> <br/><span className='cloudjour-span2'>40%</span><br/> by moving desktops and apps to the cloud</p>
      </div>
 </div>
   {/* section-2 */}
   <div className='cloudjour-2-parent'>
   <div className='cloudjour-2-h2' ><h2>Discover new use cases with hybrid VDI</h2></div>
   <div className='cloudjour-2-card-parent'>
     <div className='cloudjour-2-card'>
         <h4>BUSINESS CONTINUITY</h4>
         <p>To be prepared for a sudden 
surge in demand for desktops 
and capacity, you need the 
quick access to capacity that 
cloud can deliver.</p>
     </div>
    <div className='cloudjour-2-card'>
         <h4>DATA CENTER EXTENSION</h4>
         <p>By extending your data center 
into the cloud, you can reduce 
the time, planning, expense
and management resources 
required.</p>
     </div>
    <div className='cloudjour-2-card'>
        <h4>APP AND DATA CO-LOCATION</h4>
        <p>The ability to co-locate virtual 
desktops and apps can reduce 
latency and improve experience.</p>
     </div>
  </div>
  </div>
  {/* section3 */}
  <div className='cloudjour-final-img'>
 <img src='./images/hybrid1.png' alt='cloudjourFinalimg' width='100%' height='230px'/>
 </div>
 {/* section-4 */}
 <div className='cloudjour-4'>
 <div className='cloudjour-4-content'>
    <h2 className='cloudjour-4-h2'>Pave your own path to the hybrid cloud with VMware Horizon</h2>
     <p className='cloudjour-4-p'>VMware Horizon® is a modern platform for the secure delivery of virtual 
desktops and apps across the hybrid cloud. With Horizon, you can.</p>
<ul className='cloudjour-4-ul'>
    <li>Transform on-premises environments without redeploying apps.</li>
    <li>Extend the best digital workspace experience to end users.</li>
    <li>Deploy, manage and scale virtual desktops and apps across all Horizon 
environments with continuously updated management services from 
the <a href='https://www.vmware.com/products/horizon/controlplane.html' target='blank'>Horizon Control Plane</a>.</li>
    <li>Monitor and update your deployment from one location</li>
</ul>
 </div>
      <div className='cloudjour-4-content-2'>
      <cite className='cloudjour-4-p'>“The VMware team helped design, build, architect and deliver more than 35,000 virtual desktops from Azure in 5 days.”</cite>
      <quote><br/><br/><br/>–TOP 5 U.S. INSURANCE COMPANY</quote>
      </div>
 </div>
 {/* section-5 */}
 <div className='cloudjourn-5'>
    <h1 className='cloudjourn-5-h1'>Start or speed up your journey to future ready VDI</h1>
    <div  className='cloudjourn-5-inner'>
    <div className='cloudjourn-5-inner-1'>
      <img src='./images/cloudjourn.png' alt='last' width='100%' height='400px' />
    </div>
    <div className='cloudjourn-5-inner-2'>
    <h3>Read industry luminary Brian Madden’s Journey to the Cloud playbook.</h3>
    <p><a href='https://www.vmware.com/learn/750865_REG.html?cid=7012H000001KUiY&src=em_6019a27340a7d' target='blank'>Download</a></p>
    </div>
    </div>
 </div>

   </section>
  )
}

export default Cloudjourney
