//SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "./ERC1155.sol";
import "./Ownable.sol";

contract reward1 is ERC1155, Ownable {
    constructor()
        ERC1155(
            "https://ipfs.io/ipfs/QmQ3632cQZCeeTh9A7EaTkU5Kasaq7hhXsh7oppcdS6iHZ"
        )
    {}

    string tokenUri =
        "https://ipfs.io/ipfs/QmQ3632cQZCeeTh9A7EaTkU5Kasaq7hhXsh7oppcdS6iHZ";

    struct status {
        bool mintStatus;
        uint256 tokenID;
    }

    status Status;

    function uri(uint256) public view override returns (string memory) {
        return tokenUri;
    }

    function mint(uint256 amount) public returns (bool mintResult) {
        require(Status.mintStatus == true, "mint is not available!");

        _mint(_msgSender(), Status.tokenID, amount, "");
        return (true);
    }

    function setUri(string memory newUri) public onlyOwner {
        tokenUri = newUri;
    }

    function setMintStatus(bool _mintStatus) public onlyOwner {
        require(
            keccak256(abi.encodePacked(tokenUri)) !=
                keccak256(abi.encodePacked("")),
            "token uri has not set yet!"
        );
        Status.mintStatus = _mintStatus;
    }
}
