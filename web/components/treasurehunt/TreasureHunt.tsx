'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

export default function TreasureHunt() {
  
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
          The Treasure of the Calypso is hidden somewhere on Komodo island. Are you going to be the first one to find it?
          </p>  
          </div>


          <div className="w-full sm:text-center sm:mx-auto">
          <Image
          className="m-auto w-144 my-4"
          src="/Komodo-Island-map01.png"
          alt="Varan logo"
          width={1200}
          height={750}
        />
          </div>

          <div className="bg-gradient-to-b from-blue-800 to-blue-400 rounded-3xl py-8 px-12">
            <div className='grid grid-cols-2 gap-4'>

<div>
<h1 className='font-Acme text-lime-400 text-3xl mt-12 mb-4'>THE TREASURE HUNT STORY</h1>
<p className='font-Acme text-white text-xl '>
  
  When Komodo island is about to be taken over by the greedy investor Malcolm Butch Buggeridge to build a boring tourist resort, the Savage Varan only hope to save the island is to find the long-lost treasure of the sunken pirate ship Calypso.
</p>
<p className='font-Acme text-white text-xl mt-4'>
Read about the history of the Calypso, collect the Treasure Map NFTs and go on a hunt to find the treasure before Butch Buggeridge gets his grubby, fat fingers on it. Help the Varans to unearth this immense fortune and share the spoils.
</p>
<Link href="/webtoon">
            <button className="bg-blue-900 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded mt-5 ">
            Read Webtoons
</button>  </Link>
</div>

<div>
<Image
          className="m-auto my-4"
          src="/pirates01.png"
          alt="Pirates"
          width={1140}
          height={1176}
        />

</div>

            </div>

          </div>

          <h1 className='text-center font-Acme text-blue-800 text-2xl mt-12 mb-4'>IT IS SUPER SIMPLE TO GET STARTED:</h1>

          <div className='grid grid-cols-4 gap-4 mb-8'>
          <div>
<Image
          className="m-auto my-4 rounded-3xl"
          src="/promo_nft_compilation01.gif"
          alt="NFT"
          width={750}
          height={750}
        />
         <p className='font-Acme text-lg text-blue-800 text-center my-4'>Get a Savage Varan Tribe NFT and use it to access all content on the Varandapp.</p>

</div>

<div>
<Image
          className="m-auto my-4 rounded-3xl"
          src="/tools_animation.gif"
          alt="Tools"
          width={500}
          height={500}
        />
         <p className='font-Acme text-lg text-blue-800 text-center my-4'> Equip your Varan with various tools and get Tribe rewards as well as use the tools in the game.</p>

</div>

<div>
<Image
          className="m-auto my-4 rounded-3xl"
          src="/map_animation.gif"
          alt="Treasure Map"
          width={500}
          height={500}
        />
         <p className='font-Acme text-lg text-blue-800 text-center my-4'>Head over to the Webtoons page and read the story of The Treasure of the Calypso and win treasure map NFTs.</p>

</div>


<div>
<Image
          className="m-auto my-4 rounded-3xl"
          src="/treasure_animation.gif"
          alt="Treasure"
          width={500}
          height={500}
        />
 <p className='font-Acme text-lg text-blue-800 text-center my-4'>Equipped with your tools and the map, log in to the RPG and go on the treasure hunt.</p>
</div>

          </div>
      </div>

    );
  }