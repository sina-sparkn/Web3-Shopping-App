//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "./ERC20.sol";

contract MINKtoken is ERC20 {
    address private owner;

    constructor(uint256 totalSupply) ERC20("MINK", "MINK") {
        owner = msg.sender;
        _mint(owner, totalSupply);
    }

    function decimals() public view override returns (uint8) {
        return 3;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "you are not the owner!");
        _;
    }

    event shoppingList(string list, address from, address to);

    function addshoppinglistItems(string memory Item) public {
        emit shoppingList(Item, msg.sender, owner);
    }
}
