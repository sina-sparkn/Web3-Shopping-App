//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "./SoulBoundERC1155.sol";
import "./Ownable.sol";

contract rewardOne is SoulBoundERC1155, Ownable {
    string name_;
    string symbol_;

    constructor()
        SoulBoundERC1155(
            "https://ipfs.io/ipfs/QmSamNbBXpUaxQAiQrx5RyCM8PiPTH1ozjxjvNL5UrSLmB/reward1meta.json"
        )
    {
        name_ = "REWARD-ONE-MOONSHOP";
        symbol_ = "RONE";
        Status.mintStatus = true;
    }

    struct status {
        bool mintStatus;
    }

    status Status;

    string tokenURI =
        "https://ipfs.io/ipfs/QmSamNbBXpUaxQAiQrx5RyCM8PiPTH1ozjxjvNL5UrSLmB/reward1meta.json";

    function name() public view returns (string memory) {
        return name_;
    }

    function symbol() public view returns (string memory) {
        return symbol_;
    }

    function uri(uint256) public view override returns (string memory) {
        return tokenURI;
    }

    function mintRewardOne() public returns (bool mintResult) {
        // require(Status.mintStatus, "mint is not available!");

        _mint(_msgSender(), 1, 1, "");
        return (true);
    }

    function setMintStatus(bool _mintStatus) public onlyOwner {
        Status.mintStatus = _mintStatus;
    }
}
