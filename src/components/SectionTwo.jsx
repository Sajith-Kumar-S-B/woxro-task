import React from 'react'
import imageTwo from '../Assets/imageTwo.svg'
import imageThree from '../Assets/imageThree.svg'
import imageFour from '../Assets/imageFour.svg'

function SectionTwo() {
  return (
    <div className='sectiontwo'>
        <div>
<img style={{width:'100%',height:'100%'}}  src={imageTwo} alt="" />
<p>Explore large, destructible environments where no two games are ever the same.</p>
        </div>
        <div>
<img style={{width:'100%',height:'100%'}} src={imageThree} alt="" />
<p>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
        </div>
        <div>
<img style={{width:'100%',height:'100%'}} src={imageFour} alt="" />
<p>Discover even more ways to play across thousands of creator</p>
        </div>
    </div>
  )
}

export default SectionTwo