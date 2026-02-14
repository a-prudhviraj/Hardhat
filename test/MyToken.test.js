const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken Production Tests", function () {
  let token;
  let owner, addr1, addr2;
  const INITIAL_SUPPLY = ethers.parseUnits("1000", 18);

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const Factory = await ethers.getContractFactory("MyToken");
    token = await Factory.deploy(INITIAL_SUPPLY);
  });

  describe("Authentication & Ownership", function () {
    it("Should set the right owner", async function () {
      expect(await token.owner()).to.equal(owner.address);
    });

    it("Should prevent non-owners from minting (Authentication check)", async function () {
      const amount = ethers.parseUnits("50", 18);
      // We 'connect' as addr1 to simulate an unauthorized user
      await expect(
        token.connect(addr1).mint(addr2.address, amount)
      ).to.be.revertedWithCustomError(token, "OwnableUnauthorizedAccount");
    });
  });

  describe("ERC-20 Functionality", function () {
    it("Should assign initial supply to owner", async function () {
      const ownerBalance = await token.balanceOf(owner.address);
      expect(ownerBalance).to.equal(INITIAL_SUPPLY);
    });

    it("Should emit Transfer events on minting", async function () {
      const amount = ethers.parseUnits("100", 18);
      await expect(token.mint(addr1.address, amount))
        .to.emit(token, "Transfer")
        .withArgs(ethers.ZeroAddress, addr1.address, amount);
    });
  });

  describe("Role-Based Access Control (Bonus/Advanced)", function () {
    // If your contract uses OpenZeppelin AccessControl, use this:
    it("Should verify the owner has the default admin role", async function () {
        // Only include this if you used AccessControl.sol instead of Ownable.sol
        const DEFAULT_ADMIN_ROLE = "0x0000000000000000000000000000000000000000000000000000000000000000";
        if (token.hasRole) {
            expect(await token.hasRole(DEFAULT_ADMIN_ROLE, owner.address)).to.be.true;
        }
    });
  });
});
