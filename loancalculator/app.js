// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {
  console.log('calculating...');

  const $loanAmount = document.getElementById('amount');
  const $interestAmount = document.getElementById('interest');
  const $yearsRepay = document.getElementById('years');
  const $monthlyPayment = document.getElementById('monthly-payment');
  const $totalPayment = document.getElementById('total-payment');
  const $totalInterest = document.getElementById('total-interest');

  const principal = parseFloat($loanAmount.value);
  const calculatedInterest  = parseFloat($interestAmount.value) / 100 / 12;
  const calculatedPayments = parseFloat($yearsRepay.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    $monthlyPayment.value = monthly.toFixed(2);
    $totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    $totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
  } else {
    showError('Please check your numbers');
  }

  console.log(`
  loan amount: ${$loanAmount.value}
  interest amount: ${$interestAmount.value}
  years to repay: ${$yearsRepay.value}
  monthly payment: ${$monthlyPayment.value}
  total payment: ${$totalPayment.value}
  total interest: ${$totalInterest.value}
  `);

  e.preventDefault();
}

function showError(error) {
  // Create div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  
  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  // setTimeout(clearError, 1000);
}

// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}