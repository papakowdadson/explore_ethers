import {ethers } from 'ethers'
import {PRIVATE_KEY, ganacheProvider} from './config.js'

const {utils, providers, parseEther, BrowserProvider, Wallet } = ethers

const provider = new BrowserProvider(ganacheProvider)

const wallet = new Wallet(PRIVATE_KEY, provider);
// console.log(wallet);

const wall2 =  Wallet.fromPhrase("plate lawn minor crouch bubble evidence palace fringe bamboo laptop dutch ice")
console.log(wall2);

wallet.signTransaction({
    value: parseEther("1.0"),
    to: wall2.address,
    gasLimit: 21000,
}).then((tx) => {
    console.log('tx: ', tx);
})