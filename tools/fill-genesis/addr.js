const ethers = require('ethers');
const {
    Address,
} = require('ethereumjs-util');
const { argv } = require('yargs');

async function main() {
    console.log("from: " + argv.from);
    const addressContract = await ethers.utils.getContractAddress(
             { from: argv.from, nonce: argv.nonce },
    );
    console.log("contract address: " + addressContract);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
