const {secretKey,publicKey,myWallet,connection,airDropSol,getWalletBalance}=require('./wallet');

(async function (){
    console.log("secret key is",secretKey)
    console.log("public key is",publicKey)
    console.log('wallet is',myWallet)

    console.log("wallet balance is ",await getWalletBalance(secretKey))
    console.log("Airdropping tokens")
    await airDropSol(secretKey)
    console.log("After airdrop wallet balance is ",await getWalletBalance(secretKey))
})();
