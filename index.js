import {ethers } from 'ethers'
import {PRIVATE_KEY, PRIVATE_KEY_2, ganacheProvider} from './config.js'

const {utils, providers, Wallet } = ethers


const provider = new providers.Web3Provider(ganacheProvider)

const wallet = new Wallet(PRIVATE_KEY, provider);

const wall2 = new Wallet(PRIVATE_KEY_2, provider)

// wallet.signTransaction({
//     value: utils.parseEther("1.0"),
//     to: wall2.address,
//     gasLimit: 21000,
// }).then((tx) => {
//     console.log('tx: ', tx);
// })


wallet.sendTransaction({
    value: utils.parseEther("1.0"),
    to: wall2.address,
    gasLimit: 21000,
}, ).then((tx) => {
    console.log('tx: ', tx);
})
