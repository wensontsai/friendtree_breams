import web3 from './web3';
import ADDRESS from './secrets';

// always need ABI
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    ADDRESS
);

console.log(instance);

export default instance;