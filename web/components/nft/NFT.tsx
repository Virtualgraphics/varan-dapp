'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

export default function NFT() {
  
    return (

       <div className="justify-center px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:pt-4">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        

          <Image
          className="m-auto w-144 my-4 "
          src="/varan_logo_1500.png"
          alt="Varan logo"
          width={1500}
          height={351}
        />
      

        
          <hr className="w-full  border-yellow-300" />
          <p className="text-base font-medium tracking-wide text-yellow-300 lg:text-2xl  md:text-lg sm:px-4 py-8 font-Acme">
          Use your Varan to access the games and webtoons on the Varandapp. As a Varan you will get clues and free tools directly airdropped to your wallet.
          </p>  
          </div>

          <div className="bg-lime-600/20 rounded-3xl py-8 px-12">
            <div className='grid grid-cols-2 gap-4'>

<div>
<h1 className='font-Acme text-yellow-300 text-2xl mt-2 mb-4 tracking-wider'>COOL FEATURES AND UTILITIES OF THE SAVAGE VARAN TRIBE NFTS:</h1>
<h1 className='font-Acme text-blue-900 text-2xl mx-8'>
<ul className="list-disc">
  <li>Access to the Treasure Hunt</li>
  <li>1111 Cool PFPs</li>
  <li>Over 250 Traits</li>
  <li>Free Tools for the Treasure Hunt</li>
  <li>Eligible for Airdrops</li>
  <li>Play Game</li>
 
</ul>

<div className=" mt-8">
            <Link href="/webtoon">
            <button className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded mt-5 font-Acme text-lg">
            Mint coming soon
</button>  </Link>

</div>

</h1>

</div>

<div>
<Image
          className="m-auto  my-4 rounded-3xl shadow-2xl"
          src="/promo_nft_compilation01.gif"
          alt="Varan NFT"
          width={750}
          height={750}
        />
</div>


            </div>
            </div>

            <div className="bg-lime-800/30 rounded-3xl py-8 px-12 my-12">
            <div className='grid grid-cols-2 gap-8'>

<div>
<Image
          className="m-auto  my-4 rounded-3xl shadow-2xl"
          src="/tribe_token.gif"
          alt="Tribe"
          width={750}
          height={750}
        />
</div>

<div>
<h1 className='font-Acme text-blue-900 text-2xl mt-3 mb-4 font-semibold'>TRIBE TOKEN</h1>
<p className='font-Acme text-yellow-300 text-xl p'>
  
Tribe is the in-game token on Komodo island and is used to buy, trade and sell items as well as getting rewards. Not only the next Solana meme coin but also a token with big utilities.
</p>

<p className='font-Acme text-yellow-300 text-xl mt-4 px-8'>
  
<ul className="list-disc">
  <li>Max. supply 333 Million Tokens</li>
  <li>Mint authority frozen</li>

 
</ul>
</p>
<div className=" mt-8">
            <Link href="/webtoon">
            <button className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded mt-5 font-Acme text-lg">
            Launching soon
</button>  </Link>

</div>

</div>




            </div>
             </div>


      </div>



    );
  }