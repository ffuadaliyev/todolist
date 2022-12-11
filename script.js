var in_currency = document.getElementById("in_currency");
var out_currency = document.getElementById("out_currency");
var url = "https://api.exchangerate.host/latest?";
var base = "RUB";
var symbols = "USD";
var index = 1;
var first_currency = document.querySelector("#first_currency");
var second_currency = document.querySelector("#second_currency");

document.querySelectorAll(".left .currency_select input").forEach((element) => {
  element.addEventListener("click", () => {
    base = element.value;
    document.querySelectorAll(".left .currency_select input").forEach((e) => {
      e.style.backgroundColor = "#fff";
      e.style.color = "#c6c6c6";
    });
    element.style.backgroundColor = "#833ae0";
    element.style.color = "#fff";
    start_fetch(url, base, symbols);
  });
});
document.querySelectorAll(".right .currency_select input").forEach((element) => {
    element.addEventListener("click", () => {
      symbols = element.value;
      document
        .querySelectorAll(".right .currency_select input")
        .forEach((e) => {
          e.style.backgroundColor = "#fff";
          e.style.color = "#c6c6c6";
        });
      element.style.backgroundColor = "#833ae0";
      element.style.color = "#fff";
      start_fetch(url, base, symbols);
    });
  });
in_currency.addEventListener("input", () => {
        out_currency.value = in_currency.value * index;
        start_fetch(url, base, symbols);
      });
function start_fetch(url, base, symbols) {
  fetch(`${url}base=${base}&symbols=${symbols}`)
    .then((response) => response.json())
    .then((data) => {
      index = data.rates[symbols];
      
      first_currency.innerHTML = `1 ${base} = ${index} ${symbols}`;
      out_currency.value = in_currency.value * index;
 
    });
  fetch(`${url}base=${symbols}&symbols=${base}`)
    .then((response) => response.json())
    .then((data) => {
      index = data.rates[base];
      second_currency.innerHTML = `1 ${symbols} = ${index} ${base}`;
      
    });
}
