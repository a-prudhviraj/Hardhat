// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract MyToken is ERC20, Ownable, AccessControl {
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    constructor(uint256 initialSupply)
        ERC20("MyToken", "MTK")
        Ownable(msg.sender)      // ✔ pass msg.sender here
    {
        // Mint initial supply to deployer
        _mint(msg.sender, initialSupply);

        // Give admin role to deployer
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external {
        require(
            hasRole(BURNER_ROLE, msg.sender),
            "MyToken: caller is not burner"
        );
        _burn(from, amount);
    }

    function grantBurner(address account) external onlyOwner {
        _grantRole(BURNER_ROLE, account);
    }
}

