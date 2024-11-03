const url="https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";
const bitcoin=document.getElementById('bitcoin');
const ethereum=document.getElementById('ethereum');
const dogecoin=document.getElementById('dogecoin');


async function getDetails(){
    const response=await fetch(url);
    const data =await response.json();
    console.log(data);
    bitcoin.innerHTML=data.bitcoin.usd;
    ethereum.innerHTML=data.ethereum.usd;
    dogecoin.innerHTML=data.dogecoin.usd;

}


getDetails();