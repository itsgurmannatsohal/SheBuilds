import { ethers } from "ethers";
import { getUploads } from '@lighthouse-web3/sdk';

const retrieve = async() =>{
    const uploads = await getUploads('0x487fc2fE07c593EAb555729c3DD6dF85020B5160');

    console.log(uploads);
}

retrieve()