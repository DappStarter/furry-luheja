require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture strategy deny pave pull gentle light army gate'; 
let testAccounts = [
"0xc00be293ca2a570da110c710c1f245e2848b3beb9462e4655baec1a31b26c935",
"0x3e264c22e102f8ad2a766b175452108ecf692a0336590d53ea7697c71eb4b699",
"0xdf9b9be061ac9abbb2e7453178673177fd4a510afb6b30f4ae085618015415b7",
"0x60f5c433e3b0e09cd703b4082150a2969c0d679b6b4b20eb252d6d7d8e687ed9",
"0x908cc696c108f2b6e8d37235163d623896fc7b8a768b39caeefbc3ddda1380e3",
"0x95b34893b374ef392d6292f7a4241d69a862a94f65e8e840a556501a176f0d2c",
"0x53084dfb0353d23c84d5eacaf791bfb0c97ac079ca7009fb7738015074cb76de",
"0xa174cbe9f2410de9bdb49de45d460cf5a7a1536581d8925b4e2755440fc81671",
"0xbfc029e7b3ca13c188542e278310bcc62f4092d08ba91f578406ee753e9a85ce",
"0x8c6781fbb74a42bf1b30f0c8bccc76ae0ab23e5dfee62669f34fcad5f39c93b6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
