'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

export default function NFT() {
  
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
      </div>



    );
  }