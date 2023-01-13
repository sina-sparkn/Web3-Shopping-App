// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./ERC1155.sol";
import "./Strings.sol";
import "./Ownable.sol";

contract TestOneFile is ERC1155, Ownable {
    string name_;
    string symbol_;

    mapping(address => mapping(uint256 => bool)) minted;

    constructor()
        ERC1155(
            "https://ipfs.io/ipfs/QmVHFbsN1iwPDmKZtUARW4WDRSRSTb9oM9EeaSn2wVk5yp/{id}.json"
        )
    {
        name_ = "MooninkRewardsTest";
        symbol_ = "MIRTEST";
        Status.mintStatus = true;
    }

    struct status {
        bool mintStatus;
    }
    status Status;

    function name() public view returns (string memory) {
        return name_;
    }

    function symbol() public view returns (string memory) {
        return symbol_;
    }

    function mintReward(uint256 id) public returns (bool mintResult) {
        require(Status.mintStatus, "mint is not available!");
        require(
            !minted[_msgSender()][id],
            "you have minted this soulbound achievement once!"
        );

        _mint(_msgSender(), id, 1, "");
        minted[_msgSender()][id] = true;
        return (true);
    }

    function getminted(address user, uint256 id) public view returns (bool) {
        return minted[user][id];
    }

    function setMintStatus(bool _mintStatus) public onlyOwner {
        Status.mintStatus = _mintStatus;
    }

    function uri(uint256 _tokenid)
        public
        pure
        override
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(
                    "https://ipfs.io/ipfs/QmVHFbsN1iwPDmKZtUARW4WDRSRSTb9oM9EeaSn2wVk5yp/",
                    Strings.toString(_tokenid),
                    ".json"
                )
            );
    }
}
