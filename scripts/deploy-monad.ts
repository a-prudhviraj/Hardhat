import hre from "hardhat";
const { ethers } = hre;

async function main() {
  const initial = ethers.parseUnits("1000000", 18);

  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy(initial);

  await token.waitForDeployment();
  console.log("MyToken deployed on Monad at:", token.target);
}

main().catch(console.error);
