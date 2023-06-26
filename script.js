const amount = document.getElementById('amount')
const tip = document.getElementById('tip')
const numberofpeople = document.getElementById('Numberofpeople')
const perpersontotal = document.getElementById("ppt")
// change the datatype of number of people
let number = Number(numberofpeople.innerText);

const CalculateBill = () => {

  const Bills = Number(amount.value)
  //modifing tip 
  const percentageTip = Number(tip.value) / 100;
  //total tip calculation
  const totalTip = Bills * percentageTip;
  //total amount calculation 
  const total_bill = Bills + totalTip;
  // total amount perPerson
  const individual_amount = total_bill / number;
  //changing innertext of div container
  perpersontotal.innerText = `Rs ${individual_amount.toFixed(2)}`;
}
const IncreasePeople = () => {
  //increase the num of people
  number += 1;
  numberofpeople.innerText = number;

  // calling calculatebill function
  CalculateBill();
}
const DecreasePeople = () =>
  {
    if(number <= 1)
    {
      alert("You can not go below one!");
     return;
    }
    // decreaseing  the number of people
    number -= 1;
    // changing the inner text 
    numberofpeople.innerText = number;
    //calling back the CalculateBill function again
    CalculateBill();
  }
