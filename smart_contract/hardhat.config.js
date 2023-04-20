//https://eth-goerli.g.alchemy.com/v2/Sovf2XUv2clY2JfGjM1pomqhixGFvCUv

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/5NtFDnCm0P_e5ccs267Oxb1O-rk4OhQa',
      accounts: ['01e47ca89a4e1c6e7199193bcc832ed626802a17a5f930124dc3e4b77bb9d721'],
    },            
  },
};