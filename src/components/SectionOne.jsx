import React from 'react'
import imageOne from '../Assets/imageOne.svg'
function SectionOne() {
  return (
    <>
       <div class="close-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    </div>
      <div className='sectionone'>
      <h3>Epic Games : An American video game and software developer <br /> and publisher based in Cary, North Carolina.</h3>
     
       <div className='image'>
       <img style={{width:'100%',height:'100%'}} src={imageOne} alt="" />
         
       </div>
       <div className='content'>
       <p>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
       <div className='button'>
        <h5>        Visit Website
</h5>
       </div>
       </div>

      
       
    </div>
 
    </>
  
  )
}


export default SectionOne