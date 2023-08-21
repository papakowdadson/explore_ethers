import { ethers } from 'ethers'
import Ganache from "ganache-core"
const { utils, parseEther } = ethers

const PRIVATE_KEY = "0xf2f48ee19680706196e2e339e5da3491186e0c4c5030670656b0e0164837257d";
const INITIAL_BALANCE = parseEther('10');

// create our test account from the private key, initialize it with 10 ether
const accounts = [].concat([{
    balance: INITIAL_BALANCE.toString(16),
    secretKey: PRIVATE_KEY,
}]);

const ganacheProvider = Ganache.provider({ accounts });

export {
    INITIAL_BALANCE,
    PRIVATE_KEY,
    ganacheProvider,
}