import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

function NFT() {

  // Auth
const connectwithMetamask = useMetamask()
const address = useAddress()
const disconnect = useDisconnect()
  // --

  console. log(address)
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
{/* Left */}
<div className=" lg:col-span-4 bg-gradient-to-br from-black to-red-700">
<div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
  <div className="bg-gradient-to-br bg-red-800 to-blue-800 p-2 rounded-xl">
<img className="w-44 rounded-xl object-cover lg:h-96 lg:w-72" 
src="https://i.ibb.co/3T48f9S/istockphoto-1279803878-170667a.jpg" alt="Dragon" 
/>
</div>
<div className=" space-y-2 p-5 text-center">
  <h1 className="text-4xl font-bold text-white">Cyno's Dragons</h1>
  <h2 className=" text-xl text-gray-300">A collection of Cyno's Dragons Who Will Take Over The World!</h2>
</div>
</div>
</div>

{/* Right */}
<div className=" flex flex-1 flex-col p-12 lg:col-span-6">
{/* Header */}
<header className="flex items-center justify-between">
  <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
    The{' '} 
    <span className="font-extrabold underline decoration-red-600/50"> Cyno 
     </span>{' '}
     NFT Market Place
      </h1>
  <button onClick={() => address ? disconnect() : connectwithMetamask()} className=" rounded-full bg-black px-4 py-2 text-xs
   text-white font-bold lg:px-5 lg:py-3 lg:text-base">
   {address ? 'Sign Out' : 'Sign In'}
   </button> 

</header>
<hr className="my-2 border">
</hr>

{address && <p>You're logged in with wallet {address.substring(0, 5)}...{address.substring(address.length - 5)} </p>
}
  


{/* Content */}
<div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
  <img className="w-80 object-cover pb-10 lg:h-40" src="https://i.ibb.co/Hg0Qrjg/Icon-DC-UWP.jpg" alt="" />

<h1 className=" text-3xl font-bold lg:text-5xl lg:front-extrabold">
  The CynoDrogon Dragon Club | NFT Drop</h1>
  <p className=" pt-2 text-xl text-red-600"> 0 / 21 NFT's Claimed </p>
</div>

{/* Mint Button */}
<button className=" h-16 bg-red-800 text-white rounded-full mt-10">
  Mint NFT (0.01 ETH)
</button>

</div>
</div>

  )
}

export default NFT