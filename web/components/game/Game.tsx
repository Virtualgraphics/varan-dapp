'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

export default function Game() {
  
    return (
      
      <div className="justify-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-4">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        

          <Image
          className="m-auto w-144 my-4"
          src="/varan_logo_1500.png"
          alt="Varan logo"
          width={1500}
          height={351}
        />
      

        
          <hr className="w-full  border-yellow-300" />
          <p className="text-base font-medium tracking-wide text-yellow-300 lg:text-2xl  md:text-lg sm:px-4 py-8 font-Acme">
         Play the SAVAGE VARAN Tribe game and go on the hunt for the treasure of the Calypso, craft items for the village and party your tail off... 
          </p>  
          </div>



           <section className="mb-4 w-4/5 justify-center mx-auto flex">

    <div
      className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] rounded-3xl shadow-xl">

<Image
          className="m-auto"
          src="/game_image.jpg"
          alt="Game Image"
          width={1000}
          height={800}
        />


      <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full  overflow-hidden bg-[hsla(221,44%,25%,0.5)] bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">
            <h2 className="mb-12 text-3xl  leading-tight tracking-wide font-Acme">
            Are you ready <br /><span>for an adventure?</span>
            </h2>
            <Link href="/buy">
               <button type="button"
              className="font-Acme rounded border-2 border-yellow-300 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-yellow-300 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
              data-te-ripple-init data-te-ripple-color="light">
           PLAY GAME
            </button></Link>  
          </div>
        </div>
      </div>

      
      </div>

      </section>

      <div className="w-4/5 flex justify-center my-8 sm:text-center sm:mx-auto">
<h1 className='text-white text-center text-xl font-Acme'>
The Savage Varan Tribe Treasure Hunt is a browser game for Windows/Mac. The game will open in a new window.

</h1></div>


      <div className="w-full flex justify-center m-auto sm:text-center sm:mx-auto">
      

<div className='grid grid-cols-3 gap-16 '>
<div className=' w-48'>
  
  <Image
          className="m-auto  rounded-2xl shadow-xl"
          src="/chill_animation.gif"
          alt="Chill"
          width={500}
          height={500}
          
        />

        <p className='font-Acme text-lg text-blue-800 text-center my-4'>Chill to Drill on Komodo Island.</p>
        </div>


        <div className='rounded-2xl w-48'>
  <Image
          className="m-auto  rounded-2xl shadow-xl"
          src="/tools_animation.gif"
          alt="Tools"
          width={500}
          height={500}
        />
         <p className='font-Acme text-lg text-blue-800 text-center my-4'>Craft tools and weapons for the treasure hunt.</p>
        </div>


        <div className='rounded-2xl w-48'>
  <Image
          className="m-auto  rounded-2xl shadow-xl"
          src="/combat_animation.gif"
          alt="Combat"
          width={500}
          height={500}
        />
         <p className='font-Acme text-lg text-blue-800 text-center my-4'>Battle the natives on Komodo island.</p>
        </div>



</div>


      </div>



      </div>
    );
  }