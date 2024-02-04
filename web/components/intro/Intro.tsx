import Link from 'next/link'
import Image from 'next/image'

const Intro = () => {
    return (
      <div className="px-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-12 lg:px-8 ">
        <div className=" w-full mb-6 sm:mx-auto sm:text-center md:mb-10 lg:w-full">
          
          <p className="text-base font-medium text-yellow-300 md:text-lg lg:text-2xl font-Acme">
          Participate in the Treasure Hunt by playing the game, collecting the NFTs and Tokens and reading the fun webtoon as well as take on our weekly challenges. Are you gonna be the one to find the Treasure of the Calypso?
          </p>
        </div>
        <div className="grid gap-12 row-gap-5 lg:grid-cols-3">
          <div className=''>
          <Image
              className="object-cover w-full mb-6 shadow-xl rounded-3xl"
              src="/varan_game.jpg"
              alt="Main Image"
              width={800}
              height={800}
            />
            <h5 className=" flex items-center justify-center m-auto text-blue-800 mb-2 text-xl font-medium leading-none sm:text-2xl font-Acme">
              GAMES
            </h5>
            <p className="text-green-800 font-medium text-center font-Acme text-lg">
            Play the Savage Varan DeFi and videogames and gather enough resources, tools and clues to unearth the hidden Treasure of the Calypso.
            </p>
            <div className=" flex items-center justify-center">
            <Link href="/game">
            <button className="bg-blue-700 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded mt-5">
  Find out more
</button></Link>  </div>
          </div>
          <div>
          <Image
              className="object-cover w-full  mb-6  shadow-xl  rounded-3xl"
              src="/varan_promo03.png"
              alt="Varan NFT"
              width={1000}
              height={1000}
            />
            <h5 className="flex items-center justify-center m-auto text-blue-800 mb-2 text-xl font-medium leading-none sm:text-2xl font-Acme">
            NFTs
            </h5>
            <p className="text-green-800 font-medium text-center font-Acme text-lg">
            Use your Varan to access the games and webtoons on the Varandapp. As a Varan you will get clues and free tools directly airdropped to your wallet.
            </p>
            <div className=" flex items-center justify-center">
            <Link href="/nft"> <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-5">
            Find out more
</button></Link>

</div>
          </div>
          <div>
          <Image
              className="object-cover w-full mb-6  shadow-xl rounded-3xl "
              src="/varan_webtoon.jpg"
              alt="Main Image"
              width={800}
              height={800}
            />
            <h5 className="flex items-center justify-center m-auto text-blue-800 mb-2 text-xl font-medium leading-none sm:text-2xl font-Acme">
              WEBTOONS
            </h5>
            <p className="text-green-800 font-medium text-center font-Acme text-lg">
            Read about the history of the Calypso, collect the Treasure Map NFTs and go on a hunt before Butch Buggeridge gets his fingers on it. 
            </p>
            <div className=" flex items-center justify-center">
            <Link href="/webtoon">
            <button className="bg-blue-700 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded mt-5 ">
            Find out more
</button>  </Link>

</div>
          </div>
        </div>
      </div>
    );
  };

  export default Intro;