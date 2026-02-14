const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("MyTokenModule", (m) => {
  // Setting initial supply to 1,000,000 tokens
  const initialSupply = BigInt(1_000_000) * BigInt(10 ** 18);

  const myToken = m.contract("MyToken", [initialSupply]);

  return { myToken };
});
