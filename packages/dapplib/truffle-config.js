require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture stove crawl sister color grace civil army genius'; 
let testAccounts = [
"0x8db47a4bc4a1ab6c9b9e6d5b252ed746f9593b92fe98b851c3001f6337816f92",
"0x4fb6f84c37017285fc53af2ebd1bd737218af1f9b8ab80917f28d8ee9be2a50f",
"0x70af2747e84f87826f36478d9cb47b1acd2caf483c703fa015ed77bc16bf8df3",
"0x167921e789e7926a307a7fc5908931cf8b5b01b97a52963614e05f9cd8114b29",
"0x99a912a43705c3d21e5812c8b4b373a1df18cf782d28379ba9b31ff957eb87e8",
"0x60f8026f2a6eb55f17e4539aad16a62870d3b245135532e442cc6cde6734cbc3",
"0x4f601c59d3c95d82da75a443d97291b5211141ecf4c29c31ed907dc12e81938f",
"0x6b7aa5fd345f9edd4bf7edfbf219dadfb190e7f2ed8b14994bdaf8b469e41a52",
"0x91f839a221b0aa7a1d6993f35779696587584e0c23a7d3d8abcbf28ce001c499",
"0xdc6f8d4f869edc142bc4ce6dbfa4dc420706709c9e4c034aa76735a27fb6f424"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


