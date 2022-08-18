// https://calculator.swiftutors.com/loan-to-deposit-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const loantoDepositRatioRadio = document.getElementById('loantoDepositRatioRadio');
const loansRadio = document.getElementById('loansRadio');
const depositsRadio = document.getElementById('depositsRadio');

let loantoDepositRatio;
let loans = v1;
let deposits = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

loantoDepositRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Loans';
  variable2.textContent = 'Deposits';
  loans = v1;
  deposits = v2;
  result.textContent = '';
});

loansRadio.addEventListener('click', function() {
  variable1.textContent = 'Loan to Deposit Ratio (%)';
  variable2.textContent = 'Deposits';
  loantoDepositRatio = v1;
  deposits = v2;
  result.textContent = '';
});

depositsRadio.addEventListener('click', function() {
  variable1.textContent = 'Loan to Deposit Ratio (%)';
  variable2.textContent = 'Loans';
  loantoDepositRatio = v1;
  loans = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(loantoDepositRatioRadio.checked)
    result.textContent = `Loan to Deposit Ratio = ${computeLoantoDepositRatio().toFixed(2)} %`;

  else if(loansRadio.checked)
    result.textContent = `Loans = ${computeLoans().toFixed(2)}`;

  else if(depositsRadio.checked)
    result.textContent = `Deposits = ${computeDeposits().toFixed(2)}`;
})

// calculation

function computeLoantoDepositRatio() {
  return (Number(loans.value) / Number(deposits.value)) * 100;
}

function computeLoans() {
  return (Number(loantoDepositRatio.value) / 100) * Number(deposits.value);
}

function computeDeposits() {
  return Number(loans.value) / (Number(loantoDepositRatio.value) / 100);
}