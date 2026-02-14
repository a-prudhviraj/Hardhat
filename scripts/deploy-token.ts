import hre from "hardhat";
const { ethers } = hre;

async function main() {
    // Get the deployer account
    const [deployer] = await ethers.getSigners();
    const balance = await deployer.getBalance();
    console.log("Deploying from:", deployer.address);
    console.log("Account balance:", ethers.utils.formatEther(balance), "MON");

    // Deploy ERC20 token
    const Token = await ethers.getContractFactory("PrudhvirajToken");
    const initialSupply = ethers.parseUnits("1000000", 18); // 1,000,000 tokens
    const token = await Token.deploy(initialSupply);

    await token.waitForDeployment(); // Hardhat v3
    console.log("Token deployed at:", token.target);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
