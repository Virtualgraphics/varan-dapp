'use client';
import Image from 'next/image'

import React from 'react';


export default function Webtoon() {
  
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
          Read the weekly SAVAGE VARAN TRIBE Webtoons and earn Treasure Map NFTs.
          </p>  
          </div>

          <div className="w-full sm:text-center sm:mx-auto">
          <Image
          className="m-auto w-144 my-4"
          src="/varan_webtoon_ep01_02.png"
          alt="Varan logo"
          width={1200}
          height={750}
        />
<p className="text-base font-medium tracking-wide text-lime-900 lg:text-xl  md:text-lg sm:px-4 py-8 font-Acme mb-8">
          Check back for weekly new webtoon episodes and get the treasure hunt NFTs by pledging TRIBE tokens...
          </p>  
          </div>

      </div>
    );
  }