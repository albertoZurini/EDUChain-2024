// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract NFT is ERC721 {
    uint256 public mintPrice = 0 gwei;
    uint256 public totalSupply;
    uint256 public maxSupply;
    mapping(address => uint256) public mintedWallets;

    constructor() payable ERC721("Class attendance", "CLASS") {
        maxSupply = 256;
        totalSupply = 0;
    }

    function mint() external payable {
        require(msg.value == mintPrice, "Wrong price");
        require(maxSupply > totalSupply);

        mintedWallets[msg.sender]++;
        totalSupply++;
        _safeMint(msg.sender, totalSupply);
    }
}