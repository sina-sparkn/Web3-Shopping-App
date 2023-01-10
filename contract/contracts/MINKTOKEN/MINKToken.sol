//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "./ERC20.sol";
import "./Ownable.sol";

contract MINKtoken is ERC20, Ownable {
    constructor(uint256 totalSupply) ERC20("MINKTest", "MINKTest") {
        _mint(owner(), totalSupply);
    }

    function decimals() public pure override returns (uint8) {
        return 3;
    }

    mapping(address => uint256) TotalPurchasePerUser;
    mapping(address => uint256) RewardCounter;

    function purchase(
        address to,
        string memory Purchasedetails,
        uint256 amount
    ) public virtual {
        _Purchase(to, Purchasedetails, amount);
    }

    function _Purchase(
        address to,
        string memory Purchasedetails,
        uint256 amount
    ) internal virtual returns (bool) {
        transfer(to, amount);

        TotalPurchasePerUser[_msgSender()] += amount;

        emit purchaseDetails(Purchasedetails, _msgSender(), to, true);
        return true;
    }

    function setRewardCounter() public {
        RewardCounter[_msgSender()] += 1;
    }

    function getRewardCounter() public view returns (uint256) {
        return RewardCounter[_msgSender()];
    }

    function getTotalPurchasePerUser(address user)
        public
        view
        returns (uint256)
    {
        return TotalPurchasePerUser[user];
    }
}
