let plus = document.getElementsByClassName("fa-square-plus");
let minus = document.getElementsByClassName("fa-square-minus");
let like = document.getElementsByClassName("fa-thumbs-up");
let trash = document.getElementsByClassName("fa-trash");
let price = document.getElementsByClassName("price");
calculate();
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function (event) {
    event.target.previousElementSibling.innerText++;
    calculate();
  });
}
for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function (event) {
    if (event.target.nextElementSibling.innerText > 1) {
      event.target.nextElementSibling.innerText--;
      calculate();
    }
  });
}
for (let i = 0; i < trash.length; i++) {
  trash[i].addEventListener("click", function (event) {
    event.target.closest(".single-item").remove();
    calculate();
  });
}
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function (event) {
    event.target.classList.toggle("liked");
  });
}

function calculate() {
  let sum = 0;
  for (let i = 0; i < price.length; i++) {
    let product = price[i].closest(".single-item");
    let qte = product.querySelector(".qnt").innerText;
    sum = qte * price[i].innerText + sum;
  }
  console.log(sum);
  let total = document.getElementById("total");
  total.innerText = sum;
}
