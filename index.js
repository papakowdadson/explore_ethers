import {ethers } from 'ethers'
import {PRIVATE_KEY, PRIVATE_KEY_2, ganacheProvider} from './config.js'
import Ganache from "ganache-core"

const {utils, providers, parseEther, BrowserProvider, Wallet } = ethers


const provider = new BrowserProvider(ganacheProvider)

const wallet = new Wallet(PRIVATE_KEY, provider);

const wall2 = new Wallet(PRIVATE_KEY_2, provider)

// wallet.signTransaction({
//     value: parseEther("1.0"),
//     to: wall2.address,
//     gasLimit: 21000,
// }).then((tx) => {
//     console.log('tx: ', tx);
// })

const server = Ganache.server()
wallet.sendTransaction({
    value: parseEther("1.0"),
    to: wall2.address,
    gasLimit: 21000,
}, ).then((tx) => {
    console.log('tx: ', tx);
})
// Start the server
server.listen(8545, (err, blockchain) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log('Ganache server listening on port 8545');
        // You can now interact with the blockchain programmatically
        // For example, you can use web3.js or ethers.js to connect and interact
    }
});

