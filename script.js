const button = document.getElementById("buyButton");
count = 0;
button.onclick = function() {
    button.innerHTML = "✓ Lagd I Varukorg" + count;
    count +=1;
};

var nextStep = document.querySelector('#nextStep');

nextStep.addEventListener('click', function (e) {
  e.preventDefault();
  // Hide first view
  document.getElementById('my_form').style.display = 'none';

  // Show thank you message element
  document.getElementById('thank_you').style.display = 'block';
});
