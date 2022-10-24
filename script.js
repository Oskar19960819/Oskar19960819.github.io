const button = document.getElementById("buyButton");
count = 0;
button.onclick = function() {
    button.innerHTML = "✓ Lagd I Varukorg" + count;
    count +=1;
};


