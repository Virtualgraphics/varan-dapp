import Image from 'next/image'
import Link from 'next/link'

const NiftyIsland = () => {
    return (
      <div className="px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-12 lg:px-8 mb-16">
        <div className=" w-full mb-6 sm:mx-auto sm:text-center md:mb-10 lg:w-full"></div>


        <div className="px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-12 lg:px-8 "></div>
  <div className="bg-gradient-to-b from-blue-800 to-blue-400 rounded-3xl py-8 px-12 shadow-lg">
            <div className='grid grid-cols-2 gap-4'>

              <div>
              <h1 className='font-Acme text-blue-100 text-xl mt-3 mb-4 tracking-wide px-4'>
                The SAVAGE VARAN TRIBE is bringing  the Komodo Island experience to Nifty Island in the middle of February. Stay tuned for details and check out the new and popular Nifty Island game.
                </h1>
                <div className=" mt-8 mx-4">
            <Link href="https://niftyisland.com/">
            <button className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 rounded mt-5 font-Acme text-lg">
           Go to Nifty Island
</button>  </Link>

</div>

              </div>

              <div className='justify-center flex m-auto'>
              <Image
              className="w-64"
              src="/nifty_island_logo.png"
              alt="Nifty Island"
              width={296}
              height={344}
            />
              </div>
            
            </div>
            </div>




        </div>
    );
  };

  export default NiftyIsland;