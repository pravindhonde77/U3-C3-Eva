// Store the wallet amount to your local storage with key "amount"
let walletAmount=document.getElementById("wallet");
let sum=0;
function addToWallet(){
  let amount=document.getElementById("amount").value;
  // console.log(amount);
  sum=sum+(+amount)
  // console.log(sum);
  let previousCount=JSON.parse(localStorage.getItem("amount"))||[];
  previousCount.push(sum)
 localStorage.setItem("amount",JSON.stringify(previousCount))
 walletAmount.innerText=null;

 walletAmount.append(previousCount[previousCount.length-1])

}