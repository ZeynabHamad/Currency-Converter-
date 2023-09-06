let selectCurrency = document.querySelectorAll(".currency");
const inputCurrency = document.querySelector(".input-currency");
const outputCurrency = document.querySelector(".output-currency");
const buttonConvert = document.querySelector("button");

fetch(`https://api.frankfurter.app/currencies`)
  .then((data) => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    for (const e of entries) {
      console.log(e[0]);
      selectCurrency[0].innerHTML += ` <option value= '${e[0]}'>${e[0]}</option>`;
      selectCurrency[1].innerHTML += ` <option value='${e[0]}'>${e[0]}</option>`;
    }
  });

buttonConvert.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    selectCurrency[0].value &&
    selectCurrency[1].value &&
    inputCurrency.value
  ) {
    if (selectCurrency[0].value != selectCurrency[1].value) {
      fetch(
        `https://api.frankfurter.app/latest?amount=${inputCurrency.value}&from=${selectCurrency[0].value}&to=${selectCurrency[1].value}`
      )
        .then((val) => val.json())
        .then((val) => {
          outputCurrency.value = Object.values(val.rates)[0];
        });
    } else {
      alert("Please select ");
    }
  } else {
    alert("Please select valid currencies and enter a valid number.");
  }
});
