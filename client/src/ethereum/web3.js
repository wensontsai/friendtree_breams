import Web3 from 'web3';
const secrets = require('./secrets');

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server *OR* user is not running MetaMask..
    const provider = new Web3.providers.HttpProvider(
        // pass in URL to remote node we have access to.
            secrets.providerLink
        );
    web3 = new Web3(provider);
}   

export default web3;