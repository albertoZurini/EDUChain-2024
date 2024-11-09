"use client";

import { ethers } from "ethers";
import NFTAbi from "./abi.json";
import { useEffect, useState } from "react";

export default function Home() {

  let provider, signer, contract : unknown;
  
  useEffect(() => {
    async function setup(){
      // @ts-expect-error "ciao"
      provider = new ethers.BrowserProvider((window as unknown).ethereum);
      signer = await provider.getSigner();
      contract = new ethers.Contract("0x506D428E0414478dadC772891028282831085331", NFTAbi, signer);

      console.log(provider, signer, contract)
    }

    setup()
  }, [])
  
  const [isMinting, setIsMinting] = useState(false);
  async function mintNFT() {
    if(isMinting) return;
    setIsMinting(true)
    // Call mint function on your NFT contract
    // @ts-expect-error "ciao"
    const tx = await contract.mint();
    await tx.wait();  // Wait for transaction confirmation
    alert("NFT Minted:" + tx.hash);
  }

  return (
<div>

    <a href="#" className={`vote-btn green neon-btn ` + (isMinting ? "" : "animated-neon")} onClick={mintNFT}>
                <span className={isMinting ? `animated` : ""}></span>
                <span className={isMinting ? `animated` : ""}></span>
                <span className={isMinting ? `animated` : ""}></span>
                <span className={isMinting ? `animated` : ""}></span>
                ✅ Redeem
            </a>
</div> );
}
