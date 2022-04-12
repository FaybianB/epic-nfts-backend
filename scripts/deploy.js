const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

    // Call the function.
    let txn = await nftContract.makeAnEpicNFT();

    // Wait for it to be mined.
    await txn.wait();

    console.log("Minted NFT #1");

    // Call the function.
    txn = await nftContract.makeAnEpicNFT();

    await txn.wait();

    console.log("Minted NFT #1");

    // Get the total number of NFTs so far.
    let getTotalNftsMintedSoFar = await nftContract.getTotalNftsMintedSoFar();

    console.log("Total NFTs Minted: " + getTotalNftsMintedSoFar);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();