// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  // Hide results
  document.getElementById('results').style.display = 'none';
  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 1000);

  e.preventDefault();
});

function calculateResults() {
  console.log('calculating...');

  // Remove loader 
  document.getElementById('loading').style.display = 'none';

  // Remove error
  clearError();

  const $loanAmount = document.getElementById('amount'),
        $interestAmount = document.getElementById('interest'),
        $yearsRepay = document.getElementById('years'),
        $monthlyPayment = document.getElementById('monthly-payment'),
        $totalPayment = document.getElementById('total-payment'),
        $totalInterest = document.getElementById('total-interest');

  const principal = parseFloat($loanAmount.value),
        calculatedInterest  = parseFloat($interestAmount.value) / 100 / 12,
        calculatedPayments = parseFloat($yearsRepay.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments),
        monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    $monthlyPayment.value = monthly.toFixed(2);
    $totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    $totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    // Show results
    document.getElementById('results').style.display = 'block';
  } else {
    // Show results
    document.getElementById('results').style.display = 'none';
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


}

function showError(error) {
  // Create div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card'),
        heading = document.querySelector('.heading');
  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  
  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds -- Depreciated. Want to always show error.
  //setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
  let errorMessage = document.querySelector('.alert');
  
  // Check if error message already exists
  if (errorMessage != null) {
    errorMessage.remove();
  } else {
    console.log('there is no error');
  }
}