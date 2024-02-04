import Link from 'next/link'
import Image from 'next/image'



const Hero = () => {
    return (

      <>
      <div className="bg-gradient-to-b from-blue-800 to-blue-400 px-4 py-10 mx-auto sm:max-w-xl md:max-w-full mt-none lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-10 rounded-3xl mt-10" >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">

          <h5 className="mb-4 text-2xl  leading-none text-blue-200 font-Acme" >
          Chill and Earn with the Savage Varan Tribe
              
            </h5>
            
            <h1 className="mb-4 text-4xl leading-none text-yellow-300 font-Acme" >
            Treasure Hunt on Komodo Island
              <br className="hidden md:block" /> </h1>

              
            <p className="mb-6 text-lime-300 text-2xl font-Acme">
            The SAVAGE VARAN SOCIETY Season 1: The Hunt for the Treasure of the Calypso is a fun and entertaining gamefi experience with NFTs, DeFi and video games of the zany and crazy Varans living the good life on Komodo island.
            </p> 
            
          
            <hr className="mb-5 border-yellow-300" />
          
<div className='grid gap-0 grid-cols-2 align-middle self-auto mt-10'>
         
<div className='w-40 '>
<Link href="/treasure">
<button className="bg-blue-700 hover:bg-blue-500 text-white w-40 h-10 font-bold  px-4 rounded mt-1">
            Get started</button>
            </Link>
     
</div>

<Link href="/nft">
<button className="bg-blue-700 hover:bg-blue-500 text-white w-40 h-10 font-bold  px-4 rounded mt-1 shadow-lg">
            Mint NFT</button>
            </Link>


           </div>

           </div>


          <div className='' >
            <Image
              className="object-cover w-full h-56 rounded-3xl shadow-3xl sm:h-96 shadow-lg"
              src="/varan_hero.jpg"
              alt="Main Image"
              width={750}
              height={620}
            />


          </div>
        </div>
      </div>

      </>
    );
  };

  export default Hero;