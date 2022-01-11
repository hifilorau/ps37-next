pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// contract MyNFT is ERC721URIStorage, Ownable {
//     using Counters for Counters.Counter;
//     Counters.Counter private _tokenIds;

//     constructor() public ERC721("MyNFT", "NFT") {}

//     function mintNFT(address recipient, string memory tokenURI)
//         public onlyOwner
//         returns (uint256)
//     {
//         _tokenIds.increment();

//         uint256 newItemId = _tokenIds.current();
//         _mint(recipient, newItemId);
//         _setTokenURI(newItemId, tokenURI);

//         return newItemId;
//     }
// }


contract VaporPlanes is ERC721URIStorage, Ownable {
    using Strings for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 public constant COST_ONE = 0.05 ether;
    // uint256 public constant COST_FIVE = 0.04 ether;
    // uint256 public constant COST_TEN = 0.03 ether;

    uint256 public constant MAX_MINT = 1;
    uint256 public constant MAX_PRIVATE_SUPPLY = 900;
    uint256 public constant MAX_PUBLIC_SUPPLY = 100;
    uint256 public constant MAX_SUPPLY = MAX_PRIVATE_SUPPLY + MAX_PUBLIC_SUPPLY;
    
    address constant ADDRESS_1 = 0xA60cA66A56DE913eDBb829AE503D4320F1C26ce2;
    address constant ADDRESS_2 = 0xA2529513fa09DA493e2cA9e876F4F791780bA4a3;

    uint256 public whitelistCost = 0.03 ether;
    uint256 public whitelistMaxMint = 1;

    bool public isActive = false;
    bool public isFreeActive = false;
    bool public isWhitelistActive = false;

    uint256 public totalPrivateSupply;
    uint256 public totalPublicSupply;

    string private _contractURI;
    string private _baseTokenURI;
    mapping(address => uint256) private _claimed;
    mapping(address => bool) private _whitelist;
    mapping(address => uint256) private _whitelistClaimed;

    constructor(
        // string memory __baseURI,
        // string memory __contractURI
    ) ERC721("VaporPlanes", "VPLN") {
        // setBaseURI(__baseURI);
        // setContractURI(__contractURI);
    }

    function setContractURI(string memory contractURI_) 
        public 
        onlyOwner 
    {
        _contractURI = contractURI_;
    }

    function contractURI() 
        public 
        view 
        returns (string memory) 
    {
        return _contractURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function addToWhitelist(address[] calldata addresses) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            _whitelist[addresses[i]] = true;
        }
    }

    function claimedBy(address owner) external view returns (uint256) {
        require(owner != address(0), "Zero address not claimable");

        return _claimed[owner];
    }

    // function freeMint() external payable {
    //     require(isFreeActive, "Free minting is not active");
    //     require(_claimed[msg.sender] == 0, "Free token already claimed");
    //     require(totalSupply() < MAX_SUPPLY, "All tokens minted");
    //     require(totalPublicSupply < MAX_PUBLIC_SUPPLY, "Over max public limit");

    //     totalPublicSupply += 1;
    //     _claimed[msg.sender] += 1;
    //     _safeMint(msg.sender, MAX_PRIVATE_SUPPLY + totalPublicSupply);
    // }

    function getCost(uint256 num) public pure returns (uint256) {
        // if (num < 5) {
        //     return COST_ONE * num;
        // } else if (num > 4 && num < 10) {
        //     return COST_FIVE * num;
        // }
        return COST_ONE * num;
    }

    function gift(address to, uint256 num) external onlyOwner {
        require(totalPublicSupply < MAX_SUPPLY + 1, "All tokens minted");
        require(
            totalPrivateSupply + num < MAX_PRIVATE_SUPPLY + 1,
            "Exceeds private supply"
        );

        for (uint256 i; i < num; i++) {
            totalPrivateSupply += 1;
            _safeMint(to, totalPrivateSupply);
        }
    }

    function mint(address recipient, string memory tokenURI) external payable returns (uint256){
    
        require(isActive, "Contract is inactive");
        // require(num < MAX_MINT + 1, "Over max limit");
        require(totalPublicSupply < MAX_SUPPLY, "All tokens minted");
        require(totalPublicSupply < MAX_PUBLIC_SUPPLY, "Over max public limit");
        require(msg.value >= getCost(1), "ETH sent is not correct");
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        // for (uint256 i; i < num; i++) {
            if (totalPublicSupply < MAX_PUBLIC_SUPPLY) {
                totalPublicSupply += 1;
                 _mint(recipient, newItemId);
                 _setTokenURI(newItemId, tokenURI);
            }
        // }
        return newItemId;
    }

    function isOnWhitelist(address addr) external view returns (bool) {
        return _whitelist[addr];
    }

    function removeFromWhitelist(address[] calldata addresses)
        external
        onlyOwner
    {
        for (uint256 i = 0; i < addresses.length; i++) {
            require(
                addresses[i] != address(0),
                "Can't remove the null address"
            );

            _whitelist[addresses[i]] = false;
        }
    }

    function setActive(bool val) external onlyOwner {
        require(
            bytes(_baseTokenURI).length != 0,
            "Set Base URI before activating"
        );
        isActive = val;
    }

    function setBaseURI(string memory val) public onlyOwner {
        _baseTokenURI = val;
    }

    function setFreeActive(bool val) external onlyOwner {
        isFreeActive = val;
    }

    function setWhitelistActive(bool val) external onlyOwner {
        isWhitelistActive = val;
    }

    function setWhitelistMaxMint(uint256 val) external onlyOwner {
        whitelistMaxMint = val;
    }

    function setWhitelistPrice(uint256 val) external onlyOwner {
        whitelistCost = val;
    }

    function whitelistClaimedBy(address owner) external view returns (uint256) {
        require(owner != address(0), "Zero address not claimable");

        return _whitelistClaimed[owner];
    }

    function whitelistMint(uint256 num) external payable {
        require(isWhitelistActive, "Whitelist is not active");
        require(_whitelist[msg.sender], "You are not on the Whitelist");
        require(num < whitelistMaxMint + 1, "Over max limit");
        require(
            _whitelistClaimed[msg.sender] + num < whitelistMaxMint + 1,
            "Whitelist tokens already claimed"
        );
        require(totalPublicSupply < MAX_SUPPLY, "All tokens minted");
        require(totalPublicSupply < MAX_PUBLIC_SUPPLY, "Over max public limit");
        require(whitelistCost * num <= msg.value, "ETH amount is not correct");

        for (uint256 i = 0; i < num; i++) {
            totalPublicSupply += 1;
            if (whitelistCost == 0) {
                _claimed[msg.sender] += 1;
            }
            _whitelistClaimed[msg.sender] += 1;
            _safeMint(msg.sender, MAX_PRIVATE_SUPPLY + totalPublicSupply);
        }
    }

    function withdraw() public payable onlyOwner {
        uint256 balance = address(this).balance;
        uint256 split1 = (balance * 75/ 100 );
        uint256 split2 = (balance * 25 /100 );
        require(payable(ADDRESS_1).send(split1));
        require(payable(ADDRESS_2).send(split2));
    }
       
}