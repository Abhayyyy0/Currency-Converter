const BASE_URL = "https://api.frankfurter.app/latest";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Debug logging
console.log("Elements found:", {
  dropdowns: dropdowns.length,
  btn: btn,
  fromCurr: fromCurr,
  toCurr: toCurr,
  msg: msg
});

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  
  const URL = `${BASE_URL}?from=${fromCurr.value}&to=${toCurr.value}`;
  
  try {
    console.log("Fetching from URL:", URL);
    let response = await fetch(URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    let data = await response.json();
    
    // Log the response to see the structure
    console.log("API Response:", data);
    
    // The Frankfurter API returns data in format: { "rates": { "INR": 83.123 } }
    let rate = data.rates[toCurr.value];
    
    if (rate) {
      let finalAmount = (amtVal * rate).toFixed(2);
      msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } else {
      msg.innerText = "Exchange rate not available for selected currencies.";
    }
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    
    // Fallback: Use a simple conversion for common currencies
    const fallbackRates = {
      "USD": { "INR": 83.5, "EUR": 0.92, "GBP": 0.79, "JPY": 150.5 },
      "EUR": { "USD": 1.09, "INR": 91.0, "GBP": 0.86, "JPY": 164.0 },
      "INR": { "USD": 0.012, "EUR": 0.011, "GBP": 0.0095, "JPY": 1.8 },
      "GBP": { "USD": 1.27, "EUR": 1.16, "INR": 106.0, "JPY": 190.5 }
    };
    
    const fallbackRate = fallbackRates[fromCurr.value]?.[toCurr.value];
    if (fallbackRate) {
      let finalAmount = (amtVal * fallbackRate).toFixed(2);
      msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value} (approximate)`;
    } else {
      msg.innerText = "Error fetching exchange rate. Please try again.";
    }
  }
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log("Button clicked! Fetching exchange rate...");
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});