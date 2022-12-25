import React from 'react'
import Delivery from "../images/delivery.png";
import BgImg from "../images/bgImg.png";
import { setFour } from '../utils/data';
import D4 from "../images/d4.png"



const Home = () => {
  return (
    <section id='home' className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-[calc(100%-88px)]">
      <div className="py-3 flex-1 flex flex-col items-center md:items-start justify-start gap-6">
        <div className="flex items-center gap-2 justify-center bg-green-300 px-2 py-1 rounded-full ">
          <p className="text-base text-green-700 font-semibold my-1 mx-1">
            Bike Delivery 
          </p>
          <div className="w-7 h-7 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img 
              className="w-full h-full object-contain" 
              src={Delivery} 
              alt="bike"/>
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[5.5rem] font-bold tracking-wide text-headingColor text-center md:text-left">
           The Fastest Delivery in <span className="text-green-500 text-[2.5rem]  lg:text-[5.5rem]"> Your City. </span>
        </p>

        <p className="text-base text-textColor  md:text-left text-center md:w-[80%]">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque animi esse pariatur laboriosam minima cumque, illum fugiat! Rem sint cumque architecto, velit delectus sunt ipsum culpa voluptate reprehenderit. Fuga, quia?
        </p>

        <button
          type = "button"
          className=" bg-gradient-to-br from-green-400 to-green-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          <span className="md:text-lg text-green-100 font-semibold"> Order Now </span>
          
        </button>

      </div>

      <div className="py-2 flex-1 flex items-center relative">
        <img className='ml-auto w-full lg:h-650 lg:w-auto' src={BgImg} alt='bgImage'/>
        
        <div className='w-full h-full absolute top-0 right-0 lg:right-1 flex flex-wrap flex-row lg:flex-col items-center justify-center px-32 md:mr-32'>
          
          <div className='w-full h-full top-0 left-0 flex flex-wrap items-center justify-center py-16 gap-7 '>
            
            {setFour && setFour.map( n => (

              <div key={n.id} className=' lg:w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                
                <img className='w-20 lg:w-40 -mt-10 lg:-mt-20' src={n.imgSrc} alt='Icecream'/>
                <p className='text-base lg:text-xl font-semibold text-textColor mt-2'> {n.name} </p>
                <p className='text-sm text-lighttextGray font-semibold my-1'> {n.desc} </p>
                <p className='text-sm font-semibold text-headingColor'><span className='text-lg text-green-600'>$</span> {n.price} </p>

              </div>
            ))}
          </div>

          <div className='w-32 lg:w-190 min-w-[190px] h-40 order-last lg:h-485 p-4 md:ml-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                
            <img className='w-20 lg:w-40 top-0 -mt-20 lg:-mt-20' src={D4} alt='Icecream'/>
            <p className='text-base lg:text-xl font-semibold text-textColor mt-2'> Cocktail </p>
            <p className='text-sm text-lighttextGray font-semibold my-1'> Sex On The Beach</p>
            <p className='text-sm font-semibold text-headingColor'><span className='text-lg text-green-600'>$</span> 50.00 </p>
    
          </div>

              {/* <div className='flex items-center justify-center  '>
                <div className='w-190 min-w-[190px] h-490 mb-1 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                
                  <img className='w-40 -mt-20' src={D4} alt='Icecream'/>
                  <p className='text-xl font-semibold text-textColor mt-2'> Cocktail </p>
                  <p className='text-sm text-lighttextGray font-semibold my-1'> Sex On The Beach</p>
                  <p className='text-sm font-semibold text-headingColor'><span className='text-lg text-green-600'>$</span> 50.00 </p>
    
                </div>
              </div> */}
        </div>
        
       </div>
    </section>
  )
}

export default Home


{/* <div className="py-2 flex-1 flex items-center relative">
        <img className='ml-auto w-full lg:h-650 lg:w-auto' src={BgImg} alt='bgImage'/>
        
        <div className='w-full h-full absolute top-0 right-10 flex items-center justify-center px-4 '>
          
          <div className='w-full h-full top-0 left-0 flex flex-wrap items-center justify-center py-16 gap-7 '>
            
            {setFour && setFour.map( n => (

              <div key={n.id} className='w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                
                <img className='w-40 -mt-20' src={n.imgSrc} alt='Icecream'/>
                <p className='text-xl font-semibold text-textColor mt-2'> {n.name} </p>
                <p className='text-sm text-lighttextGray font-semibold my-1'> {n.desc} </p>
                <p className='text-sm font-semibold text-headingColor'><span className='text-lg text-green-600'>$</span> {n.price} </p>

              </div>
            ))}
          </div>

          <div className='flex items-center justify-center  '>
            <div className='w-190 min-w-[190px] h-490 mb-1 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                
                <img className='w-40 -mt-20' src={D4} alt='Icecream'/>
                <p className='text-xl font-semibold text-textColor mt-2'> Cocktail </p>
                <p className='text-sm text-lighttextGray font-semibold my-1'> Sex On The Beach</p>
                <p className='text-sm font-semibold text-headingColor'><span className='text-lg text-green-600'>$</span> 50.00 </p>
    
              </div> */}
      //     </div>

      //   </div>
        
      //  </div>