//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "./ERC1155.sol";
import "./Ownable.sol";

contract rewardThree is ERC1155, Ownable {
    string name_;
    string symbol_;

    constructor()
        ERC1155(
            "https://ipfs.io/ipfs/QmSamNbBXpUaxQAiQrx5RyCM8PiPTH1ozjxjvNL5UrSLmB/reward3meta.json"
        )
    {
        name_ = "REWARD-THREE-MOONSHOP";
        symbol_ = "RTHREE";
    }

    struct status {
        bool mintStatus;
    }

    status Status;

    string tokenURI =
        "https://ipfs.io/ipfs/QmSamNbBXpUaxQAiQrx5RyCM8PiPTH1ozjxjvNL5UrSLmB/reward3meta.json";

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
        require(Status.mintStatus == true, "mint is not available!");

        _mint(_msgSender(), 3, 1, "");
        return (true);
    }

    function setMintStatus(bool _mintStatus) public onlyOwner {
        Status.mintStatus = _mintStatus;
    }
}
