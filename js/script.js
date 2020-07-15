let quantity = document.querySelector('.quantity');
let plus = document.querySelector('.plus');
let counter = 1;
let minus = document.querySelector('.minus');

plus.onclick = function () {
    counter++;
    quantity.value  = counter;
}
minus.onclick = function () {
    if (counter ===0) {
        return
    }
    counter--;
    quantity.value  = counter;
}

let modal = document.getElementById('search');
let btn = document.getElementById('my-btn');

btn.onclick = function() {
    modal.style.display = "flex";
  }
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
